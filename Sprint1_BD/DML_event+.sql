-- DML DATABASE MANIPULATION LANGUAGE

-- INSERIR DADOS NAS TABELAS

USE [Event+_Manha];

INSERT INTO TipoUsuario(Titulo) VALUES ('Administrador'),('Comum')

INSERT INTO TipoEvento(Titulo) VALUES ('HTML'),('Linguagem C#'), ('SQL Server')

INSERT INTO Instituicao(CNPJ,NomeFantasia,Endereco) VALUES ('98631093513422','Senai Mario Amato','Rua Vitória Maria Medice, 330'),
('67249015832140','Senai Paulo Skaf','Rua Niteroi, 180'), ('3987061329081','Senai Armando de Arruda','Rua Santo Andre, 680')

INSERT INTO Usuario(IdTipoUsuario,Nome,Email,Senha) VALUES ('2','Gabriel','gab11@gmail.com','09gab09'),
('2','Eduardo','edu@gmail.com','du123'), ('1','Carlos','carlosadm@gmail.com','carlos99')

INSERT INTO Evento(IdTipoEvento,IdInstituicao,Nome,Descricao,[Data],Horario) 
VALUES ('3','4','Desvendando o HTML','Conheca e desvende conosco conceitos sobre HTML','2023-09-23','09:00:00'),
('1','2','Banco de dados SQL Server','Aprenda conceitos basicos e iniciais sobre banco de dados','2023-08-20','14:00:00'),
('2','1','C# Senai','Introducao em conceitos basicos sobre a linguagem C#','2023-12-09','20:00:00')

INSERT INTO PresencaEvento(IdUsuario,IdEvento,Situacao) VALUES ('3','8','1'),('2','7','1'),('1','6','0'),('2','6','1')

INSERT INTO Comentario(IdUsuario,IdEvento,Descricao,Exibir) VALUES ('3','8','Confirmo minha presenca nesse evento incrivel','1'),
('1','6','Mensagem Impropria','0'),('2','7','Gostei muito','1'), ('2','6','Evento bem chamativo e empolgante','1')

UPDATE Instituicao
Set Endereco = 'Rua Vitória Maria Medice, 330' WHERE IdInstituicao = 4;


DELETE FROM Comentario
WHERE IdComentario = '5'








select * from TipoUsuario
select * from TipoEvento
select * from Instituicao
select * from Usuario
select * from Evento
select * from PresencaEvento
select * from Comentario

