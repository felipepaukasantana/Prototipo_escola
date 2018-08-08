package br.com.escola.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.escola.model.Serie;

public interface ISerieRepository extends JpaRepository<Serie, Long> {

}
