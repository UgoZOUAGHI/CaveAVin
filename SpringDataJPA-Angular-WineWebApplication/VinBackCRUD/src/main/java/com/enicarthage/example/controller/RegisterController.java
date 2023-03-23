package com.enicarthage.example.controller;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import javax.validation.Valid;

import com.enicarthage.example.entity.ERole;
import com.enicarthage.example.entity.Producteur;
import com.enicarthage.example.entity.Role;
import com.enicarthage.example.entity.User;
import com.enicarthage.example.entity.Vin;
import com.enicarthage.example.payload.JwtResponse;
import com.enicarthage.example.payload.LoginRequest;
import com.enicarthage.example.payload.MessageResponse;
import com.enicarthage.example.payload.SignupRequest;
import com.enicarthage.example.repository.ProducteurRepository;
import com.enicarthage.example.repository.RegistrationRepository;
import com.enicarthage.example.repository.RoleRepository;
import com.enicarthage.example.repository.VinRepository;
import com.enicarthage.example.security.jwt.JwtUtils;
import com.enicarthage.example.security.service.UserDetailsImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200", "http://localhost:8080",
		"http://localhost:8081","*" },maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class RegisterController {

	@Autowired
	RegistrationRepository registrationRepository;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	/*@PostMapping("/users")
	public User ajouterUser(@RequestBody User user) throws Exception {

		String tempEmailId = user.getEmail();
		if (tempEmailId != null && !"".equals(tempEmailId)) {
			User userobj = registrationRepository.findByEmailId(tempEmailId);
			if (userobj != null) {
				throw new Exception(("User with " + tempEmailId + "already exists"));
			}
		}
		User userobj = null;
		userobj = registrationRepository.save(user);
		return userobj;

	}*/
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest){
		if (registrationRepository.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (registrationRepository.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(), 
							 signUpRequest.getEmail(),
							 encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				switch (role) {
				case "admin":
					Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				case "producteur":
					Role prodRole = roleRepository.findByName(ERole.ROLE_PRODUCTEUR)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(prodRole);

					break;
				default:
					Role userRole = roleRepository.findByName(ERole.ROLE_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		registrationRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@Valid @RequestBody LoginRequest loginRequest) throws Exception {
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		List<String> roles = userDetails.getAuthorities().stream().map(item -> item.getAuthority())
				.collect(Collectors.toList());
		return ResponseEntity.ok(
				new JwtResponse(jwt, userDetails.getId(), userDetails.getUsername(), userDetails.getEmail(), roles));

	}

	// exemple requête REST : http://localhost:8090/api/v1/UserById/1
	/*@GetMapping("/UserById/{id}")
	public User getUserById(@PathVariable long id) {
		return registrationRepository.findById(id);
	}*/

}
