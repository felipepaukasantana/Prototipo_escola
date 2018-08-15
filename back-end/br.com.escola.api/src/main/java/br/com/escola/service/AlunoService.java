package br.com.escola.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.escola.model.Aluno;
import br.com.escola.repository.AlunoRepository;
import br.com.escola.repository.LinguaEstrangeiraRepository;
import br.com.escola.repository.TurmaRepository;

@Service
public class AlunoService {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@Autowired
	private LinguaEstrangeiraRepository linguaRepository;
	
	@Autowired
	private TurmaRepository turmaRepository;

	public Aluno adicionar(Aluno aluno) {
		aluno.setLingua(linguaRepository.findById(aluno.getLingua().getId()).get());
		aluno.setTurma(turmaRepository.findById(aluno.getTurma().getId()).get());
		return alunoRepository.save(aluno);
	}

	public List<Aluno> listarTodos() {
		return alunoRepository.findAll();
	}
	
}
