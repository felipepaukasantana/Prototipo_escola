package br.com.escola.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.escola.model.Turma;
import br.com.escola.repository.TurmaRepository;

@Service
public class TurmaService {
	
	@Autowired
	private TurmaRepository turmaRepository;

	public List<Turma> listarTodos() {
		return turmaRepository.findAll();
	}
	
	
}
