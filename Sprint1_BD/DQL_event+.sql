--  DQL  DATA QUERY LANGUAGE
 
-- LISTAR DADOS DAS TABELAS

use [Event+_Manha]

	SELECT
		Usuario.Nome               AS [Nome do Usuario],
		TipoUsuario.Titulo         AS [Tipo de Usuario],
		CONCAT(Evento.[Data],',',Evento.Horario)    AS [Data],

		CONCAT(Instituicao.NomeFantasia,' ','-',' ',Instituicao.Endereco) AS [Local],

		Evento.Nome                AS [Nome do Evento],
		Evento.Descricao           AS [Descricao do Evento],
		CASE  WHEN PresencaEvento.Situacao = '1' 
		THEN 'Confirmada' ELSE 'Nao Confirmada' END AS Situacao,
		Comentario.Descricao AS Comentario
	FROM
		Usuario
	LEFT JOIN  TipoUsuario     ON  Usuario.IdTipoUsuario = TipoUsuario.IdTipoUsuario
	LEFT JOIN  PresencaEvento  ON  PresencaEvento.IdUsuario = Usuario.IdUsuario 
	LEFT JOIN  Evento          ON  PresencaEvento.IdEvento = Evento.IdEvento
	LEFT JOIN  Instituicao     ON  Instituicao.IdInstituicao = Evento.IdInstituicao
	LEFT JOIN  Comentario      ON  Comentario.IdUsuario = Usuario.IdUsuario and Comentario.IdEvento = Evento.IdEvento
