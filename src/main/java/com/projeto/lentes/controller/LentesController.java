package com.projeto.lentes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lentes")
public class LentesController {
	
	@GetMapping("/")
	  public String index() {
		  return "Lentes por Rodrigo Leal";
	  }

}
