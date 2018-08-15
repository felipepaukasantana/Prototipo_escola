package br.com.escola.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.escola.model.Aluno;
import br.com.escola.service.AlunoService;

@CrossOrigin("*")
@RestController
@RequestMapping("/alunos")
public class AlunosResource {

	@Autowired
	private AlunoService alunoService;
	
	@GetMapping
	public List<Aluno> listar() {
		return alunoService.listarTodos();
	}
	
	@PostMapping
	public Aluno adicionar(@RequestBody @Valid Aluno aluno) {
		return alunoService.adicionar(aluno);
	}

}
