package br.com.escola.resource;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.escola.model.Serie;
import br.com.escola.service.SerieService;

@CrossOrigin("*")
@RestController
public class SerieResource {

	@Autowired
	private SerieService serieService;

	@GetMapping(value = "/series/")
	public ResponseEntity<List<Serie>> listarTodos() {
		List<Serie> series = serieService.listarTodos();
		if (series.isEmpty())
			return new ResponseEntity<List<Serie>>(HttpStatus.NO_CONTENT);

		return new ResponseEntity<List<Serie>>(series, HttpStatus.OK);
	}

	@GetMapping(value = "/series/{id}")
	public ResponseEntity<Serie> buscarPorId(@PathVariable("id") long id) {
		Optional<Serie> serie = serieService.buscarPorId(id);
		if (serie == null)
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);

		return new ResponseEntity<Serie>(serie.get(), HttpStatus.OK);
	}

	@PostMapping(value = "/series/")
	public ResponseEntity<Void> adicionar(@RequestBody Serie serie, UriComponentsBuilder ucBuilder) {
		serieService.adicionarOuAlterar(serie);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/series/{id}").buildAndExpand(serie.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@PutMapping(value = "/series/{id}")
	public ResponseEntity<Serie> updateUser(@PathVariable("id") long id, @RequestBody Serie serie) {
		Serie serieCorrente = serieService.buscarPorId(id).get();
		if (serieCorrente == null)
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);

		serieCorrente.setDescricao(serie.getDescricao());

		serieService.adicionarOuAlterar(serieCorrente);
		return new ResponseEntity<Serie>(serieCorrente, HttpStatus.OK);
	}

	@DeleteMapping(value = "/series/{id}")
	public ResponseEntity<Serie> removerPorId(@PathVariable("id") long id) {
		if (!serieService.verificarPorId(id))
			return new ResponseEntity<Serie>(HttpStatus.NOT_FOUND);

		serieService.removerPorId(id);
		return new ResponseEntity<Serie>(HttpStatus.NO_CONTENT);
	}

	@DeleteMapping(value = "/series/")
	public ResponseEntity<Serie> removerTodos() {
		serieService.removerTodos();
		return new ResponseEntity<Serie>(HttpStatus.NO_CONTENT);
	}
}