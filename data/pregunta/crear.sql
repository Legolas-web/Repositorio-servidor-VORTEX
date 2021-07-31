INSERT INTO [dbo].[pregunta]
    (
        [preguntaText]
    )
VALUES 
    (
        @preguntaText
    )



SELECT [idPregunta]
      ,[preguntaText]
FROM  [dbo].[pregunta]
WHERE [idPregunta]=SCOPE_IDENTITY()  
      