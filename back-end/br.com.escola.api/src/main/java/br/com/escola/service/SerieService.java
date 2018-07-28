package br.com.escola.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.escola.model.Serie;
import br.com.escola.repository.ISerieRepository;

@Service
public class SerieService {

	@Autowired
	private ISerieRepository serieRepository;

	public List<Serie> listarTodos() {
		return serieRepository.findAll();
	}

	public Optional<Serie> buscarPorId(long id) {
		return serieRepository.findById(id);
	}

	public Serie adicionarOuAlterar(Serie serie) {
		return serieRepository.save(serie);
	}
	
	public boolean verificarPorId(long id) {
		return serieRepository.existsById(id);
	}
	
	public void removerPorId(long id) {
		serieRepository.deleteById(id);
	}	

	public void removerTodos() {
       serieRepository.deleteAll();
	}		
}
