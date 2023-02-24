package com.anurag.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RestController;

@Controller
public class HomeController {

	@GetMapping("/signinpage")
	public String signin(Model m) {
		return "signin";
	}
	
	@GetMapping("/signuppage")
	public String signup(Model m) {
		return  "signup";
	}
}
