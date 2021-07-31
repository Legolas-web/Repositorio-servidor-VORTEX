SELECT [idRespuesta]
      ,[respuestaText]
      ,[idPregunta]
FROM [dbo].[respuesta]
WHERE [idPregunta]=@idPregunta