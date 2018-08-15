package br.com.escola.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.escola.model.Turma;
import br.com.escola.service.TurmaService;

@CrossOrigin("*")
@RestController
@RequestMapping("/turmas")
public class TurmaResource {

	@Autowired
	private TurmaService turmaService;
	
	@GetMapping
	public List<Turma> listar() {
		return turmaService.listarTodos();
	}

}
