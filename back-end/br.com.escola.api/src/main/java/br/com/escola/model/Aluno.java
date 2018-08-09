package br.com.escola.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;

@Entity
public class Aluno {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private String nome;	
	
	@NotNull
	@JoinColumn(name="LINGUA_ESTRANGEIRA")
	@ManyToOne(cascade = CascadeType.ALL)
	private LinguaEstrangeira lingua;
		
	@NotNull
	@JoinColumn(name="TURMA")
	@ManyToOne(cascade = CascadeType.ALL)
	private Turma turma;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public LinguaEstrangeira getLingua() {
		return lingua;
	}

	public void setLingua(LinguaEstrangeira lingua) {
		this.lingua = lingua;
	}

	public Turma getTurma() {
		return turma;
	}

	public void setTurma(Turma turma) {
		this.turma = turma;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + (int) (id ^ (id >>> 32));
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Aluno other = (Aluno) obj;
		if (id != other.id)
			return false;
		return true;
	}
	
}
