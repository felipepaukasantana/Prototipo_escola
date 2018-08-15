insert into LINGUA_ESTRANGEIRA (id, nome) values (1, 'Espanhol');
insert into LINGUA_ESTRANGEIRA (id, nome) values (2, 'Inglês');

insert into SERIE (id, descricao) values (1, '1 Ano');
insert into SERIE (id, descricao) values (2, '2 Ano');

insert into TURMA (id, descricao, serie) values (1, '1 A', 1);
insert into TURMA (id, descricao, serie) values (2, '1 B', 1);
insert into TURMA (id, descricao, serie) values (3, '2 A', 2);
insert into TURMA (id, descricao, serie) values (4, '2 B', 2);

insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (1, 'João da Silva', 1, 2);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (2, 'Jorge Souza', 1, 2);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (3, 'Miguel Santos', 1, 1);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (4, 'Edson Arantes', 2, 3);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (5, 'Ronaldo Nazario', 2, 4);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (6, 'Cristiano Ronaldo', 2, 1);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (7, 'Leonel Messi', 1, 1);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (8, 'Angel Romero', 1, 1);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (9, 'Zinedine Zidane', 2, 2);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (10, 'Roberto Carlos', 2, 2);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (11, 'Adenor Leonardo', 1, 4);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (12, 'Romário', 1, 2);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (13, 'Carlos Alberto', 1, 1);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (14, 'Marta', 1, 2);
insert into aluno (id, nome, LINGUA_ESTRANGEIRA, turma) values (15, 'Renato Augusto', 2, 3);