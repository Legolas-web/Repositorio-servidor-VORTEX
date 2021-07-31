UPDATE [dbo].[respuesta]
SET [respuestaText]=@respuestaText,
     [idPregunta]=@idPregunta
WHERE [idRespuesta]=@idRespuesta

SELECT [idRespuesta]
      ,[respuestaText]
      ,[idPregunta]
FROM [dbo].[respuesta]
WHERE [idRespuesta]=@idRespuesta