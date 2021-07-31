UPDATE [dbo].[pregunta]
SET [preguntaText]=@preguntaText
WHERE [idPregunta]=@idPregunta

SELECT [idPregunta]
      ,[preguntaText]
FROM [dbo].[pregunta]
WHERE [idPregunta]=@idPregunta