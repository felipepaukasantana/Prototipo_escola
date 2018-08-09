package br.com.escola.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.escola.model.LinguaEstrangeira;
import br.com.escola.service.LinguaEstrangeiraService;

@CrossOrigin("*")
@RestController
@RequestMapping("/linguas")
public class LinguasEstrangeirasResource {

	@Autowired
	private LinguaEstrangeiraService linguaService;
	
	@GetMapping
	public List<LinguaEstrangeira> listar() {
		return linguaService.listarTodos();
	}

}
