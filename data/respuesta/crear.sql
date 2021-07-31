INSERT INTO [dbo].[respuesta]
    (
        [respuestaText],
        [idPregunta]
    )
VALUES 
    (
        @respuestaText,
        @idPregunta
    )



SELECT [idRespuesta]
      ,[respuestaText]
      ,[idPregunta]
FROM  [dbo].[respuesta]
WHERE [idRespuesta]=SCOPE_IDENTITY()  