package br.com.escola.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.escola.model.LinguaEstrangeira;
import br.com.escola.repository.LinguaEstrangeiraRepository;

@Service
public class LinguaEstrangeiraService {
	
	@Autowired
	private LinguaEstrangeiraRepository linguaEstrangeiraRepository;

	public List<LinguaEstrangeira> listarTodos() {
		return linguaEstrangeiraRepository.findAll();
	}
	
	
}
