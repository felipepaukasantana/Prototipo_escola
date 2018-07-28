package br.com.escola.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.escola.model.Aluno;
import br.com.escola.repository.AlunoRepository;

@Service
public class AlunoService {
	
	@Autowired
	private AlunoRepository alunoRepository;

	public Aluno adicionar(Aluno aluno) {
		return alunoRepository.save(aluno);
	}

	public List<Aluno> listarTodos() {
		return alunoRepository.findAll();
	}
	
}
