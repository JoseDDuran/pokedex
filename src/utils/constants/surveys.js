const surveys = {
    "surveys": [
        {
            "id": 1,
            "name": "Encuesta baños",
            "description": "Encuesta NPS para los servicios higiénicos",
            "type": "STEP",
            "surveyQuestion": [
                {
                    "id": 10,
                    "questionableType": "QUESTION",
                    "questionableId": 1,
                    "minItemsSelected": 0,
                    "maxItemsSelected": 0,
                    "surveyId": 1,
                    "position": 1,
                    "backgroundImagePortrait": null,
                    "backgroundImageLandscape": null,
                    "mainImage": null,
                    "name": "Hola",
                    "description": "Queremos saber tu opinión acerca de tu experiencia en Real Plaza",
                    "active": false,
                    "questionStyleId": 1,
                    "surveyQuestionOption": [],
                    "showTitle": false,
                    "showButton": false
                },
                {
                    "id": 11,
                    "questionableType": "QUESTION",
                    "questionableId": 2,
                    "minItemsSelected": 0,
                    "maxItemsSelected": 0,
                    "surveyId": 1,
                    "position": 2,
                    "backgroundImagePortrait": null,
                    "backgroundImageLandscape": null,
                    "mainImage": null,
                    "name": "¿Cómo fue tu experiencia en Real Plaza Puruchuco?",
                    "description": null,
                    "active": false,
                    "questionStyleId": 4,
                    "surveyQuestionOption": [
                        {
                            "id": 2,
                            "nextSurveyQuestionId": 12,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451921/NPS2/img_cara_mal.png",
                            "surveyQuestionId": 11,
                            "viewLabel": false,
                            "optionId": 1,
                            "required": false,
                            "label": "Mal",
                            "value": "0"
                        },
                        {
                            "id": 3,
                            "nextSurveyQuestionId": 12,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_promedio.png",
                            "surveyQuestionId": 11,
                            "viewLabel": false,
                            "optionId": 2,
                            "required": false,
                            "label": "No muy bien",
                            "value": "1"
                        },
                        {
                            "id": 4,
                            "nextSurveyQuestionId": 14,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_excelente.png",
                            "surveyQuestionId": 11,
                            "viewLabel": false,
                            "optionId": 3,
                            "required": false,
                            "label": "Promedio",
                            "value": "2"
                        },
                        {
                            "id": 5,
                            "nextSurveyQuestionId": 14,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_bien.png",
                            "surveyQuestionId": 11,
                            "viewLabel": false,
                            "optionId": 4,
                            "required": false,
                            "label": "Bien",
                            "value": "3"
                        },
                        {
                            "id": 6,
                            "nextSurveyQuestionId": 14,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_bien.png",
                            "surveyQuestionId": 11,
                            "viewLabel": false,
                            "optionId": 5,
                            "required": false,
                            "label": "¡Muy bien!",
                            "value": "4"
                        }
                    ],
                    "showTitle": false,
                    "showButton": false
                },
                {
                    "id": 12,
                    "questionableType": "QUESTION",
                    "questionableId": 3,
                    "minItemsSelected": 0,
                    "maxItemsSelected": 0,
                    "surveyId": 1,
                    "position": 3,
                    "backgroundImagePortrait": null,
                    "backgroundImageLandscape": null,
                    "mainImage": null,
                    "name": "¿Qué te gustó más de tu experiencia en Real Plaza?",
                    "description": null,
                    "active": false,
                    "questionStyleId": 5,
                    "surveyQuestionOption": [
                        {
                            "id": 7,
                            "nextSurveyQuestionId": 13,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451681/NPS2/img_atencion.png",
                            "surveyQuestionId": 12,
                            "viewLabel": false,
                            "optionId": 6,
                            "required": false,
                            "label": "Ambiente",
                            "value": null
                        },
                        {
                            "id": 8,
                            "nextSurveyQuestionId": 13,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_ban%CC%83osldpi.png",
                            "surveyQuestionId": 12,
                            "viewLabel": false,
                            "optionId": 7,
                            "required": false,
                            "label": "Accesibilidad",
                            "value": null
                        },
                        {
                            "id": 9,
                            "nextSurveyQuestionId": 13,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_altos.png",
                            "surveyQuestionId": 12,
                            "viewLabel": false,
                            "optionId": 8,
                            "required": false,
                            "label": "Atención",
                            "value": null
                        },
                        {
                            "id": 10,
                            "nextSurveyQuestionId": 13,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_ambiente.png",
                            "surveyQuestionId": 12,
                            "viewLabel": false,
                            "optionId": 9,
                            "required": false,
                            "label": "Entretenimiento",
                            "value": null
                        },
                        {
                            "id": 11,
                            "nextSurveyQuestionId": 14,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_accesibilidad.png",
                            "surveyQuestionId": 12,
                            "viewLabel": false,
                            "optionId": 10,
                            "required": false,
                            "label": "Limpieza",
                            "value": null
                        },
                        {
                            "id": 12,
                            "nextSurveyQuestionId": 14,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_accesomall.png",
                            "surveyQuestionId": 12,
                            "viewLabel": false,
                            "optionId": 11,
                            "required": false,
                            "label": "Precios",
                            "value": null
                        },
                        {
                            "id": 13,
                            "nextSurveyQuestionId": 14,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451877/NPS2/img_circulacionmall.png",
                            "surveyQuestionId": 12,
                            "viewLabel": false,
                            "optionId": 12,
                            "required": false,
                            "label": "Servicios",
                            "value": null
                        },
                        {
                            "id": 14,
                            "nextSurveyQuestionId": 14,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451877/NPS2/img_cine.png",
                            "surveyQuestionId": 12,
                            "viewLabel": false,
                            "optionId": 13,
                            "required": false,
                            "label": "Seguridad",
                            "value": null
                        },
                        {
                            "id": 15,
                            "nextSurveyQuestionId": 14,
                            "image": "https://res.cloudinary.com/tambo/image/upload/v1572451872/NPS2/img_centroatencion.png",
                            "surveyQuestionId": 12,
                            "viewLabel": false,
                            "optionId": 14,
                            "required": false,
                            "label": "Tiendas & locales",
                            "value": null
                        }
                    ],
                    "showTitle": false,
                    "showButton": false
                },
                {
                    "id": 13,
                    "questionableType": "QUESTION",
                    "questionableId": 4,
                    "minItemsSelected": 0,
                    "maxItemsSelected": 0,
                    "surveyId": 1,
                    "position": 4,
                    "backgroundImagePortrait": null,
                    "backgroundImageLandscape": null,
                    "mainImage": null,
                    "name": "Limpieza",
                    "description": "Especifica por favor",
                    "active": false,
                    "questionStyleId": 7,
                    "surveyQuestionOption": [
                        {
                            "id": 16,
                            "nextSurveyQuestionId": 0,
                            "image": null,
                            "surveyQuestionId": 13,
                            "viewLabel": false,
                            "optionId": 15,
                            "required": false,
                            "label": "Baños",
                            "value": null
                        },
                        {
                            "id": 17,
                            "nextSurveyQuestionId": 0,
                            "image": null,
                            "surveyQuestionId": 13,
                            "viewLabel": false,
                            "optionId": 16,
                            "required": false,
                            "label": "Parking",
                            "value": null
                        },
                        {
                            "id": 18,
                            "nextSurveyQuestionId": 0,
                            "image": null,
                            "surveyQuestionId": 13,
                            "viewLabel": false,
                            "optionId": 17,
                            "required": false,
                            "label": "Pasillos",
                            "value": null
                        },
                        {
                            "id": 19,
                            "nextSurveyQuestionId": 0,
                            "image": null,
                            "surveyQuestionId": 13,
                            "viewLabel": false,
                            "optionId": 18,
                            "required": false,
                            "label": "Locales",
                            "value": null
                        },
                        {
                            "id": 20,
                            "nextSurveyQuestionId": 0,
                            "image": null,
                            "surveyQuestionId": 13,
                            "viewLabel": false,
                            "optionId": 19,
                            "required": false,
                            "label": "Patio de comidas",
                            "value": null
                        },
                        {
                            "id": 21,
                            "nextSurveyQuestionId": 0,
                            "image": null,
                            "surveyQuestionId": 13,
                            "viewLabel": false,
                            "optionId": 20,
                            "required": false,
                            "label": "Ingreso al mall(exteriores)",
                            "value": null
                        }
                    ],
                    "showTitle": false,
                    "showButton": false
                },
                {
                    "id": 14,
                    "questionableType": "QUESTION",
                    "questionableId": 5,
                    "minItemsSelected": 0,
                    "maxItemsSelected": 0,
                    "surveyId": 1,
                    "position": 5,
                    "backgroundImagePortrait": null,
                    "backgroundImageLandscape": null,
                    "mainImage": null,
                    "name": "Nos es grato saber que eres feliz en Real Plaza",
                    "description": "Gracias por tu opinión, participa por un kit de la felicidad",
                    "active": false,
                    "questionStyleId": 9,
                    "surveyQuestionOption": [],
                    "showTitle": false,
                    "showButton": false
                }
            ]
        }
    ],
    "questionTypes": [
        {
            "id": 1,
            "name": "welcome",
            "description": "Pantalla de bienvenida"
        },
        {
            "id": 2,
            "name": "unique",
            "description": "Pregunta de opción única"
        },
        {
            "id": 3,
            "name": "multiple",
            "description": "Pregunta de múltiples opciones"
        },
        {
            "id": 4,
            "name": "thanks",
            "description": "Pantalla de gracias"
        },
        {
            "id": 5,
            "name": "input_text",
            "description": "Pregunta de entrada de texto"
        },
        {
            "id": 6,
            "name": "status_message",
            "description": "Pantalla con mensaje de estado"
        },
        {
            "id": 7,
            "name": "hook",
            "description": "Pantalla de anzuelo"
        },
        {
            "id": 8,
            "name": "form",
            "description": "Formulario"
        }
    ],
    "questionStyles": [
        {
            "id": 1,
            "name": "default",
            "questionTypeId": 1
        },
        {
            "id": 2,
            "name": "isn_horizontal",
            "questionTypeId": 2
        },
        {
            "id": 3,
            "name": "nps_horizontal",
            "questionTypeId": 2
        },
        {
            "id": 4,
            "name": "isn_vertical",
            "questionTypeId": 2
        },
        {
            "id": 5,
            "name": "vertical",
            "questionTypeId": 2
        },
        {
            "id": 6,
            "name": "nps_vertical",
            "questionTypeId": 2
        },
        {
            "id": 7,
            "name": "vertical",
            "questionTypeId": 3
        },
        {
            "id": 8,
            "name": "with_button",
            "questionTypeId": 4
        },
        {
            "id": 9,
            "name": "without_button",
            "questionTypeId": 4
        },
        {
            "id": 10,
            "name": "with_image",
            "questionTypeId": 4
        },
        {
            "id": 11,
            "name": "text_multiple",
            "questionTypeId": 5
        },
        {
            "id": 12,
            "name": "skip",
            "questionTypeId": 6
        },
        {
            "id": 13,
            "name": "show_text",
            "questionTypeId": 6
        },
        {
            "id": 14,
            "name": "default",
            "questionTypeId": 7
        },
        {
            "id": 15,
            "name": "unique_radio_button",
            "questionTypeId": 8
        },
        {
            "id": 16,
            "name": "input_edit_text",
            "questionTypeId": 8
        },
        {
            "id": 17,
            "name": "input_date_text",
            "questionTypeId": 8
        },
        {
            "id": 18,
            "name": "unique_spinner",
            "questionTypeId": 8
        }
    ],
    "setting": {
        "screenIdleTime": 10,
        "currentAppVersion": 1,
        "beginSync": 2,
        "syncInterval": 2,
        "endSync": 3
    }
}
const survey2 = {
  "surveys": [
      {
          "id": 3,
          "name": "Encuesta patio de comidas",
          "description": "Encuesta patio comidas",
          "type": "STEP",
          "surveyQuestion": [
              {
                  "id": 15,
                  "questionableType": "QUESTION",
                  "questionableId": 1,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 3,
                  "position": 1,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Hola",
                  "description": "Queremos saber tu opinión acerca de tu experiencia en Real Plaza",
                  "active": true,
                  "questionStyleId": 1,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": true
              },
              {
                  "id": 16,
                  "questionableType": "QUESTION",
                  "questionableId": 6,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 3,
                  "position": 2,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Por favor califica nuestros servicios",
                  "description": null,
                  "active": true,
                  "questionStyleId": 3,
                  "surveyQuestionOption": [
                      {
                          "id": 24,
                          "nextSurveyQuestionId": 17,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901950/NPS2/img_face1.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 21,
                          "required": true,
                          "label": "0",
                          "value": "0"
                      },
                      {
                          "id": 25,
                          "nextSurveyQuestionId": 17,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901950/NPS2/img_face1.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 22,
                          "required": true,
                          "label": "1",
                          "value": "1"
                      },
                      {
                          "id": 26,
                          "nextSurveyQuestionId": 17,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901950/NPS2/img_face1.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 23,
                          "required": true,
                          "label": "2",
                          "value": "2"
                      },
                      {
                          "id": 27,
                          "nextSurveyQuestionId": 17,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901950/NPS2/img_face4.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 24,
                          "required": true,
                          "label": "3",
                          "value": "3"
                      },
                      {
                          "id": 28,
                          "nextSurveyQuestionId": 17,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901950/NPS2/img_face4.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 25,
                          "required": true,
                          "label": "4",
                          "value": "4"
                      },
                      {
                          "id": 29,
                          "nextSurveyQuestionId": 17,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901950/NPS2/img_face4.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 26,
                          "required": true,
                          "label": "5",
                          "value": "5"
                      },
                      {
                          "id": 30,
                          "nextSurveyQuestionId": 20,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901950/NPS2/img_face3.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 27,
                          "required": true,
                          "label": "6",
                          "value": "6"
                      },
                      {
                          "id": 31,
                          "nextSurveyQuestionId": 20,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901950/NPS2/img_face3.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 28,
                          "required": true,
                          "label": "7",
                          "value": "7"
                      },
                      {
                          "id": 32,
                          "nextSurveyQuestionId": 20,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901950/NPS2/img_face3.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 29,
                          "required": true,
                          "label": "8",
                          "value": "8"
                      },
                      {
                          "id": 33,
                          "nextSurveyQuestionId": 20,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901949/NPS2/img_face2.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 30,
                          "required": true,
                          "label": "9",
                          "value": "9"
                      },
                      {
                          "id": 34,
                          "nextSurveyQuestionId": 20,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572901949/NPS2/img_face2.png",
                          "surveyQuestionId": 16,
                          "viewLabel": false,
                          "optionId": 31,
                          "required": true,
                          "label": "10",
                          "value": "10"
                      }
                  ],
                  "showTitle": true,
                  "showButton": true
              },
              {
                  "id": 17,
                  "questionableType": "QUESTION",
                  "questionableId": 7,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 3,
                  "position": 3,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "¡Participa por un kit de la felicidad!",
                  "description": "Completa tus datos y participa por un kit de la felicidad que Real Plaza tiene para ti.",
                  "active": true,
                  "questionStyleId": 14,
                  "surveyQuestionOption": [
                      {
                          "id": 22,
                          "nextSurveyQuestionId": 20,
                          "image": null,
                          "surveyQuestionId": 17,
                          "viewLabel": false,
                          "optionId": 40,
                          "required": true,
                          "label": "Omitir",
                          "value": null
                      },
                      {
                          "id": 23,
                          "nextSurveyQuestionId": 18,
                          "image": null,
                          "surveyQuestionId": 17,
                          "viewLabel": false,
                          "optionId": 41,
                          "required": true,
                          "label": "Participar",
                          "value": null
                      }
                  ],
                  "showTitle": true,
                  "showButton": true
              },
              {
                  "id": 18,
                  "questionableType": "SURVEY",
                  "questionableId": 2,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 3,
                  "position": 4,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "¿Cómo fue tu experiencia en Real Plaza Puruchuco?",
                  "description": null,
                  "active": true,
                  "questionStyleId": 4,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": true
              },
              {
                  "id": 19,
                  "questionableType": "QUESTION",
                  "questionableId": 8,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 3,
                  "position": 5,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "¡Tu respuesta ha sido registrada!",
                  "description": "Tus ideas y sugerencias juegan un rol importante ayudándonos a identificar oportunidades de mejora.",
                  "active": true,
                  "questionStyleId": 13,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": true
              },
              {
                  "id": 20,
                  "questionableType": "QUESTION",
                  "questionableId": 23,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 3,
                  "position": 6,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": "https://res.cloudinary.com/tambo/image/upload/v1572929962/NPS2/img_status_message_landscape.png",
                  "name": "Vuelve pronto y recuerda",
                  "description": "Estás aquí para ser feliz",
                  "active": true,
                  "questionStyleId": 12,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              }
          ]
      },
      {
          "id": 2,
          "name": "Formulario interno",
          "description": "Formulario que irá dentro de la encuesta de baños",
          "type": "LINEAL",
          "surveyQuestion": [
              {
                  "id": 1,
                  "questionableType": "QUESTION",
                  "questionableId": 10,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 2,
                  "position": 1,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Documento:",
                  "description": null,
                  "active": true,
                  "questionStyleId": 15,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              },
              {
                  "id": 2,
                  "questionableType": "QUESTION",
                  "questionableId": 11,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 2,
                  "position": 2,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Tu número de documento es:",
                  "description": null,
                  "active": true,
                  "questionStyleId": 16,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              },
              {
                  "id": 3,
                  "questionableType": "QUESTION",
                  "questionableId": 12,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 2,
                  "position": 3,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Tus nombres son:",
                  "description": null,
                  "active": true,
                  "questionStyleId": 16,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              },
              {
                  "id": 4,
                  "questionableType": "QUESTION",
                  "questionableId": 13,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 2,
                  "position": 4,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Tus apellidos son:",
                  "description": null,
                  "active": true,
                  "questionStyleId": 16,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              },
              {
                  "id": 5,
                  "questionableType": "QUESTION",
                  "questionableId": 14,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 2,
                  "position": 5,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Correo:",
                  "description": null,
                  "active": true,
                  "questionStyleId": 16,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              },
              {
                  "id": 6,
                  "questionableType": "QUESTION",
                  "questionableId": 15,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 2,
                  "position": 6,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Teléfono(opcional):",
                  "description": null,
                  "active": true,
                  "questionStyleId": 16,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              },
              {
                  "id": 7,
                  "questionableType": "QUESTION",
                  "questionableId": 16,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 2,
                  "position": 7,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Elige tu género:",
                  "description": null,
                  "active": true,
                  "questionStyleId": 15,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              },
              {
                  "id": 8,
                  "questionableType": "QUESTION",
                  "questionableId": 17,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 2,
                  "position": 8,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Fecha de nacimiento:",
                  "description": null,
                  "active": true,
                  "questionStyleId": 17,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              },
              {
                  "id": 9,
                  "questionableType": "QUESTION",
                  "questionableId": 18,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 2,
                  "position": 9,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Distrito/provincia",
                  "description": null,
                  "active": true,
                  "questionStyleId": 18,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              }
          ]
      }
  ],
  "questionTypes": [
      {
          "id": 1,
          "name": "welcome",
          "description": "Pantalla de bienvenida"
      },
      {
          "id": 2,
          "name": "unique",
          "description": "Pregunta de opción única"
      },
      {
          "id": 3,
          "name": "multiple",
          "description": "Pregunta de múltiples opciones"
      },
      {
          "id": 4,
          "name": "thanks",
          "description": "Pantalla de gracias"
      },
      {
          "id": 5,
          "name": "input_text",
          "description": "Pregunta de entrada de texto"
      },
      {
          "id": 6,
          "name": "status_message",
          "description": "Pantalla con mensaje de estado"
      },
      {
          "id": 7,
          "name": "hook",
          "description": "Pantalla de anzuelo"
      },
      {
          "id": 8,
          "name": "form",
          "description": "Formulario"
      }
  ],
  "questionStyles": [
      {
          "id": 1,
          "name": "default",
          "questionTypeId": 1
      },
      {
          "id": 2,
          "name": "isn_horizontal",
          "questionTypeId": 2
      },
      {
          "id": 3,
          "name": "nps_horizontal",
          "questionTypeId": 2
      },
      {
          "id": 4,
          "name": "isn_vertical",
          "questionTypeId": 2
      },
      {
          "id": 5,
          "name": "vertical",
          "questionTypeId": 2
      },
      {
          "id": 6,
          "name": "nps_vertical",
          "questionTypeId": 2
      },
      {
          "id": 7,
          "name": "vertical",
          "questionTypeId": 3
      },
      {
          "id": 8,
          "name": "with_button",
          "questionTypeId": 4
      },
      {
          "id": 9,
          "name": "without_button",
          "questionTypeId": 4
      },
      {
          "id": 10,
          "name": "with_image",
          "questionTypeId": 4
      },
      {
          "id": 11,
          "name": "text_multiple",
          "questionTypeId": 5
      },
      {
          "id": 12,
          "name": "skip",
          "questionTypeId": 6
      },
      {
          "id": 13,
          "name": "show_text",
          "questionTypeId": 6
      },
      {
          "id": 14,
          "name": "default",
          "questionTypeId": 7
      },
      {
          "id": 15,
          "name": "unique_radio_button",
          "questionTypeId": 8
      },
      {
          "id": 16,
          "name": "input_edit_text",
          "questionTypeId": 8
      },
      {
          "id": 17,
          "name": "input_date_text",
          "questionTypeId": 8
      },
      {
          "id": 18,
          "name": "unique_spinner",
          "questionTypeId": 8
      }
  ],
  "setting": {
      "screenIdleTime": 10,
      "currentAppVersion": 1,
      "beginSync": 2,
      "syncInterval": 2,
      "endSync": 3
  }
}

const survey3 = {
  "surveys": [
      {
          "id": 4,
          "name": "Encuesta Puruchuco",
          "description": "Encuesta compleja",
          "type": "STEP",
          "surveyQuestion": [
              {
                  "id": 21,
                  "questionableType": "QUESTION",
                  "questionableId": 1,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 1,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Hola",
                  "description": "Queremos saber tu opinión acerca de tu experiencia en Real Plaza",
                  "active": true,
                  "questionStyleId": 1,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": true
              },
              {
                  "id": 22,
                  "questionableType": "QUESTION",
                  "questionableId": 19,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 2,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "¿Cómo fue tu experiencia en Real Plaza Puruchuco?",
                  "description": null,
                  "active": true,
                  "questionStyleId": 2,
                  "surveyQuestionOption": [
                      {
                          "id": 35,
                          "nextSurveyQuestionId": 23,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451921/NPS2/img_cara_mal.png",
                          "surveyQuestionId": 22,
                          "viewLabel": false,
                          "optionId": 42,
                          "required": true,
                          "label": "Mal",
                          "value": "0"
                      },
                      {
                          "id": 36,
                          "nextSurveyQuestionId": 24,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_promedio.png",
                          "surveyQuestionId": 22,
                          "viewLabel": false,
                          "optionId": 43,
                          "required": true,
                          "label": "No muy bien",
                          "value": "1"
                      },
                      {
                          "id": 37,
                          "nextSurveyQuestionId": 24,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_excelente.png",
                          "surveyQuestionId": 22,
                          "viewLabel": false,
                          "optionId": 44,
                          "required": true,
                          "label": "Promedio",
                          "value": "2"
                      },
                      {
                          "id": 38,
                          "nextSurveyQuestionId": 24,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_bien.png",
                          "surveyQuestionId": 22,
                          "viewLabel": false,
                          "optionId": 45,
                          "required": true,
                          "label": "Bien",
                          "value": "3"
                      },
                      {
                          "id": 39,
                          "nextSurveyQuestionId": 24,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_bien.png",
                          "surveyQuestionId": 22,
                          "viewLabel": false,
                          "optionId": 46,
                          "required": true,
                          "label": "Muy bien",
                          "value": "4"
                      }
                  ],
                  "showTitle": false,
                  "showButton": false
              },
              {
                  "id": 23,
                  "questionableType": "QUESTION",
                  "questionableId": 2,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 3,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "¿Cómo fue tu experiencia en Real Plaza Puruchuco?",
                  "description": null,
                  "active": true,
                  "questionStyleId": 4,
                  "surveyQuestionOption": [
                      {
                          "id": 40,
                          "nextSurveyQuestionId": 24,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451921/NPS2/img_cara_mal.png",
                          "surveyQuestionId": 23,
                          "viewLabel": false,
                          "optionId": 1,
                          "required": true,
                          "label": "Mal",
                          "value": "0"
                      },
                      {
                          "id": 41,
                          "nextSurveyQuestionId": 25,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_promedio.png",
                          "surveyQuestionId": 23,
                          "viewLabel": false,
                          "optionId": 2,
                          "required": true,
                          "label": "No muy bien",
                          "value": "1"
                      },
                      {
                          "id": 42,
                          "nextSurveyQuestionId": 25,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_excelente.png",
                          "surveyQuestionId": 23,
                          "viewLabel": false,
                          "optionId": 3,
                          "required": true,
                          "label": "Promedio",
                          "value": "2"
                      },
                      {
                          "id": 43,
                          "nextSurveyQuestionId": 25,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_bien.png",
                          "surveyQuestionId": 23,
                          "viewLabel": false,
                          "optionId": 4,
                          "required": true,
                          "label": "Bien",
                          "value": "3"
                      },
                      {
                          "id": 44,
                          "nextSurveyQuestionId": 25,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451920/NPS2/img_cara_bien.png",
                          "surveyQuestionId": 23,
                          "viewLabel": false,
                          "optionId": 5,
                          "required": true,
                          "label": "¡Muy bien!",
                          "value": "4"
                      }
                  ],
                  "showTitle": false,
                  "showButton": false
              },
              {
                  "id": 24,
                  "questionableType": "QUESTION",
                  "questionableId": 6,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 4,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Por favor califica nuestros servicios",
                  "description": null,
                  "active": true,
                  "questionStyleId": 3,
                  "surveyQuestionOption": [
                      {
                          "id": 45,
                          "nextSurveyQuestionId": 25,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 21,
                          "required": true,
                          "label": "0",
                          "value": "0"
                      },
                      {
                          "id": 46,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 22,
                          "required": true,
                          "label": "1",
                          "value": "1"
                      },
                      {
                          "id": 47,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 23,
                          "required": true,
                          "label": "2",
                          "value": "2"
                      },
                      {
                          "id": 48,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 24,
                          "required": true,
                          "label": "3",
                          "value": "3"
                      },
                      {
                          "id": 49,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 25,
                          "required": true,
                          "label": "4",
                          "value": "4"
                      },
                      {
                          "id": 50,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 26,
                          "required": true,
                          "label": "5",
                          "value": "5"
                      },
                      {
                          "id": 51,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 27,
                          "required": true,
                          "label": "6",
                          "value": "6"
                      },
                      {
                          "id": 52,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 28,
                          "required": true,
                          "label": "7",
                          "value": "7"
                      },
                      {
                          "id": 53,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 29,
                          "required": true,
                          "label": "8",
                          "value": "8"
                      },
                      {
                          "id": 54,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 30,
                          "required": true,
                          "label": "9",
                          "value": "9"
                      },
                      {
                          "id": 55,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 24,
                          "viewLabel": false,
                          "optionId": 31,
                          "required": true,
                          "label": "10",
                          "value": "10"
                      }
                  ],
                  "showTitle": false,
                  "showButton": false
              },
              {
                  "id": 25,
                  "questionableType": "QUESTION",
                  "questionableId": 20,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 5,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Por favor, califica nuestros servicios",
                  "description": null,
                  "active": true,
                  "questionStyleId": 6,
                  "surveyQuestionOption": [
                      {
                          "id": 56,
                          "nextSurveyQuestionId": 26,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 58,
                          "required": true,
                          "label": "0",
                          "value": "0"
                      },
                      {
                          "id": 57,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 59,
                          "required": true,
                          "label": "1",
                          "value": "1"
                      },
                      {
                          "id": 58,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 60,
                          "required": true,
                          "label": "2",
                          "value": "2"
                      },
                      {
                          "id": 59,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 61,
                          "required": true,
                          "label": "3",
                          "value": "3"
                      },
                      {
                          "id": 60,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 62,
                          "required": true,
                          "label": "4",
                          "value": "4"
                      },
                      {
                          "id": 61,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 63,
                          "required": true,
                          "label": "5",
                          "value": "5"
                      },
                      {
                          "id": 62,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 64,
                          "required": true,
                          "label": "6",
                          "value": "6"
                      },
                      {
                          "id": 63,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 65,
                          "required": true,
                          "label": "7",
                          "value": "7"
                      },
                      {
                          "id": 64,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 66,
                          "required": true,
                          "label": "8",
                          "value": "8"
                      },
                      {
                          "id": 65,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 67,
                          "required": true,
                          "label": "9",
                          "value": "9"
                      },
                      {
                          "id": 66,
                          "nextSurveyQuestionId": 27,
                          "image": null,
                          "surveyQuestionId": 25,
                          "viewLabel": false,
                          "optionId": 68,
                          "required": true,
                          "label": "10",
                          "value": "10"
                      }
                  ],
                  "showTitle": false,
                  "showButton": false
              },
              {
                  "id": 26,
                  "questionableType": "QUESTION",
                  "questionableId": 3,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 6,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "¿Qué te gustó más de tu experiencia en Real Plaza?",
                  "description": null,
                  "active": true,
                  "questionStyleId": 5,
                  "surveyQuestionOption": [
                      {
                          "id": 67,
                          "nextSurveyQuestionId": 27,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451681/NPS2/img_atencion.png",
                          "surveyQuestionId": 26,
                          "viewLabel": false,
                          "optionId": 6,
                          "required": true,
                          "label": "Ambiente",
                          "value": null
                      },
                      {
                          "id": 68,
                          "nextSurveyQuestionId": 28,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_ban%CC%83osldpi.png",
                          "surveyQuestionId": 26,
                          "viewLabel": false,
                          "optionId": 7,
                          "required": true,
                          "label": "Accesibilidad",
                          "value": null
                      },
                      {
                          "id": 69,
                          "nextSurveyQuestionId": 28,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_altos.png",
                          "surveyQuestionId": 26,
                          "viewLabel": false,
                          "optionId": 8,
                          "required": true,
                          "label": "Atención",
                          "value": null
                      },
                      {
                          "id": 70,
                          "nextSurveyQuestionId": 28,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_ambiente.png",
                          "surveyQuestionId": 26,
                          "viewLabel": false,
                          "optionId": 9,
                          "required": true,
                          "label": "Entretenimiento",
                          "value": null
                      },
                      {
                          "id": 71,
                          "nextSurveyQuestionId": 28,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_accesibilidad.png",
                          "surveyQuestionId": 26,
                          "viewLabel": false,
                          "optionId": 10,
                          "required": true,
                          "label": "Limpieza",
                          "value": null
                      },
                      {
                          "id": 72,
                          "nextSurveyQuestionId": 28,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451680/NPS2/img_accesomall.png",
                          "surveyQuestionId": 26,
                          "viewLabel": false,
                          "optionId": 11,
                          "required": true,
                          "label": "Precios",
                          "value": null
                      },
                      {
                          "id": 73,
                          "nextSurveyQuestionId": 28,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451877/NPS2/img_circulacionmall.png",
                          "surveyQuestionId": 26,
                          "viewLabel": false,
                          "optionId": 12,
                          "required": true,
                          "label": "Servicios",
                          "value": null
                      },
                      {
                          "id": 74,
                          "nextSurveyQuestionId": 28,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451877/NPS2/img_cine.png",
                          "surveyQuestionId": 26,
                          "viewLabel": false,
                          "optionId": 13,
                          "required": true,
                          "label": "Seguridad",
                          "value": null
                      },
                      {
                          "id": 75,
                          "nextSurveyQuestionId": 28,
                          "image": "https://res.cloudinary.com/tambo/image/upload/v1572451872/NPS2/img_centroatencion.png",
                          "surveyQuestionId": 26,
                          "viewLabel": false,
                          "optionId": 14,
                          "required": true,
                          "label": "Tiendas & locales",
                          "value": null
                      }
                  ],
                  "showTitle": false,
                  "showButton": false
              },
              {
                  "id": 27,
                  "questionableType": "QUESTION",
                  "questionableId": 21,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 7,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "¿Deseas enviarnos un comentario?",
                  "description": "Escribe un comentario...",
                  "active": true,
                  "questionStyleId": 11,
                  "surveyQuestionOption": [
                      {
                          "id": 76,
                          "nextSurveyQuestionId": 28,
                          "image": null,
                          "surveyQuestionId": 27,
                          "viewLabel": false,
                          "optionId": 69,
                          "required": true,
                          "label": "Enviar",
                          "value": null
                      },
                      {
                          "id": 77,
                          "nextSurveyQuestionId": 29,
                          "image": null,
                          "surveyQuestionId": 27,
                          "viewLabel": false,
                          "optionId": 70,
                          "required": true,
                          "label": "Omitir",
                          "value": null
                      }
                  ],
                  "showTitle": false,
                  "showButton": false
              },
              {
                  "id": 28,
                  "questionableType": "QUESTION",
                  "questionableId": 7,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 8,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "¡Participa por un kit de la felicidad!",
                  "description": "Completa tus datos y participa por un kit de la felicidad que Real Plaza tiene para ti.",
                  "active": true,
                  "questionStyleId": 14,
                  "surveyQuestionOption": [
                      {
                          "id": 78,
                          "nextSurveyQuestionId": 29,
                          "image": null,
                          "surveyQuestionId": 28,
                          "viewLabel": false,
                          "optionId": 40,
                          "required": true,
                          "label": "Omitir",
                          "value": null
                      },
                      {
                          "id": 79,
                          "nextSurveyQuestionId": 30,
                          "image": null,
                          "surveyQuestionId": 28,
                          "viewLabel": false,
                          "optionId": 41,
                          "required": true,
                          "label": "Participar",
                          "value": null
                      }
                  ],
                  "showTitle": false,
                  "showButton": false
              },
              {
                  "id": 29,
                  "questionableType": "QUESTION",
                  "questionableId": 4,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 9,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Limpieza",
                  "description": "Especifica por favor",
                  "active": true,
                  "questionStyleId": 7,
                  "surveyQuestionOption": [
                      {
                          "id": 80,
                          "nextSurveyQuestionId": 30,
                          "image": null,
                          "surveyQuestionId": 29,
                          "viewLabel": false,
                          "optionId": 15,
                          "required": true,
                          "label": "Baños",
                          "value": null
                      },
                      {
                          "id": 81,
                          "nextSurveyQuestionId": 31,
                          "image": null,
                          "surveyQuestionId": 29,
                          "viewLabel": false,
                          "optionId": 16,
                          "required": true,
                          "label": "Parking",
                          "value": null
                      },
                      {
                          "id": 82,
                          "nextSurveyQuestionId": 31,
                          "image": null,
                          "surveyQuestionId": 29,
                          "viewLabel": false,
                          "optionId": 17,
                          "required": true,
                          "label": "Pasillos",
                          "value": null
                      },
                      {
                          "id": 83,
                          "nextSurveyQuestionId": 31,
                          "image": null,
                          "surveyQuestionId": 29,
                          "viewLabel": false,
                          "optionId": 18,
                          "required": true,
                          "label": "Locales",
                          "value": null
                      },
                      {
                          "id": 84,
                          "nextSurveyQuestionId": 31,
                          "image": null,
                          "surveyQuestionId": 29,
                          "viewLabel": false,
                          "optionId": 19,
                          "required": true,
                          "label": "Patio de comidas",
                          "value": null
                      },
                      {
                          "id": 85,
                          "nextSurveyQuestionId": 31,
                          "image": null,
                          "surveyQuestionId": 29,
                          "viewLabel": false,
                          "optionId": 20,
                          "required": true,
                          "label": "Ingreso al mall(exteriores)",
                          "value": null
                      }
                  ],
                  "showTitle": true,
                  "showButton": true
              },
              {
                  "id": 30,
                  "questionableType": "QUESTION",
                  "questionableId": 22,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 10,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "No es grato saber que eres feliz en Real Plaza.",
                  "description": "Gracias por tu opinión, participa por un kit de la felicidad.",
                  "active": true,
                  "questionStyleId": 8,
                  "surveyQuestionOption": [],
                  "showTitle": false,
                  "showButton": false
              },
              {
                  "id": 31,
                  "questionableType": "QUESTION",
                  "questionableId": 9,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 4,
                  "position": 11,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Tus datos han sido enviados exitosamente ",
                  "description": null,
                  "active": true,
                  "questionStyleId": 10,
                  "surveyQuestionOption": [],
                  "showTitle": false,
                  "showButton": false
              }
          ]
      }
  ],
  "questionTypes": [
      {
          "id": 1,
          "name": "welcome",
          "description": "Pantalla de bienvenida"
      },
      {
          "id": 2,
          "name": "unique",
          "description": "Pregunta de opción única"
      },
      {
          "id": 3,
          "name": "multiple",
          "description": "Pregunta de múltiples opciones"
      },
      {
          "id": 4,
          "name": "thanks",
          "description": "Pantalla de gracias"
      },
      {
          "id": 5,
          "name": "input_text",
          "description": "Pregunta de entrada de texto"
      },
      {
          "id": 6,
          "name": "status_message",
          "description": "Pantalla con mensaje de estado"
      },
      {
          "id": 7,
          "name": "hook",
          "description": "Pantalla de anzuelo"
      },
      {
          "id": 8,
          "name": "form",
          "description": "Formulario"
      }
  ],
  "questionStyles": [
      {
          "id": 1,
          "name": "default",
          "questionTypeId": 1
      },
      {
          "id": 2,
          "name": "isn_horizontal",
          "questionTypeId": 2
      },
      {
          "id": 3,
          "name": "nps_horizontal",
          "questionTypeId": 2
      },
      {
          "id": 4,
          "name": "isn_vertical",
          "questionTypeId": 2
      },
      {
          "id": 5,
          "name": "vertical",
          "questionTypeId": 2
      },
      {
          "id": 6,
          "name": "nps_vertical",
          "questionTypeId": 2
      },
      {
          "id": 7,
          "name": "vertical",
          "questionTypeId": 3
      },
      {
          "id": 8,
          "name": "with_button",
          "questionTypeId": 4
      },
      {
          "id": 9,
          "name": "without_button",
          "questionTypeId": 4
      },
      {
          "id": 10,
          "name": "with_image",
          "questionTypeId": 4
      },
      {
          "id": 11,
          "name": "text_multiple",
          "questionTypeId": 5
      },
      {
          "id": 12,
          "name": "skip",
          "questionTypeId": 6
      },
      {
          "id": 13,
          "name": "show_text",
          "questionTypeId": 6
      },
      {
          "id": 14,
          "name": "default",
          "questionTypeId": 7
      },
      {
          "id": 15,
          "name": "unique_radio_button",
          "questionTypeId": 8
      },
      {
          "id": 16,
          "name": "input_edit_text",
          "questionTypeId": 8
      },
      {
          "id": 17,
          "name": "input_date_text",
          "questionTypeId": 8
      },
      {
          "id": 18,
          "name": "unique_spinner",
          "questionTypeId": 8
      }
  ],
  "setting": {
      "screenIdleTime": 10,
      "currentAppVersion": 2,
      "beginSync": 2,
      "syncInterval": 2,
      "endSync": 3
  }
}

const survey4 = {
  "surveys": [
      {
          "id": 5,
          "name": "Encuesta oficinas",
          "description": "Encuesta oficinas",
          "type": "STEP",
          "surveyQuestion": [
              {
                  "id": 32,
                  "questionableType": "QUESTION",
                  "questionableId": 23,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 5,
                  "position": 2,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": "https://res.cloudinary.com/tambo/image/upload/v1572929962/NPS2/img_status_message_landscape.png",
                  "name": "Vuelve pronto y recuerda",
                  "description": "Estás aquí para ser feliz",
                  "active": true,
                  "questionStyleId": 12,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": true
              },
              {
                  "id": 33,
                  "questionableType": "QUESTION",
                  "questionableId": 9,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 5,
                  "position": 3,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Tus datos han sido enviados exitosamente ",
                  "description": null,
                  "active": true,
                  "questionStyleId": 10,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": false
              },
              {
                  "id": 34,
                  "questionableType": "QUESTION",
                  "questionableId": 1,
                  "minItemsSelected": 0,
                  "maxItemsSelected": 0,
                  "surveyId": 5,
                  "position": 1,
                  "backgroundImagePortrait": null,
                  "backgroundImageLandscape": null,
                  "mainImage": null,
                  "name": "Hola",
                  "description": "Queremos saber tu opinión acerca de tu experiencia en Real Plaza",
                  "active": true,
                  "questionStyleId": 1,
                  "surveyQuestionOption": [],
                  "showTitle": true,
                  "showButton": true
              }
          ]
      }
  ],
  "questionTypes": [
      {
          "id": 1,
          "name": "welcome",
          "description": "Pantalla de bienvenida"
      },
      {
          "id": 2,
          "name": "unique",
          "description": "Pregunta de opción única"
      },
      {
          "id": 3,
          "name": "multiple",
          "description": "Pregunta de múltiples opciones"
      },
      {
          "id": 4,
          "name": "thanks",
          "description": "Pantalla de gracias"
      },
      {
          "id": 5,
          "name": "input_text",
          "description": "Pregunta de entrada de texto"
      },
      {
          "id": 6,
          "name": "status_message",
          "description": "Pantalla con mensaje de estado"
      },
      {
          "id": 7,
          "name": "hook",
          "description": "Pantalla de anzuelo"
      },
      {
          "id": 8,
          "name": "form",
          "description": "Formulario"
      }
  ],
  "questionStyles": [
      {
          "id": 1,
          "name": "default",
          "questionTypeId": 1
      },
      {
          "id": 2,
          "name": "isn_horizontal",
          "questionTypeId": 2
      },
      {
          "id": 3,
          "name": "nps_horizontal",
          "questionTypeId": 2
      },
      {
          "id": 4,
          "name": "isn_vertical",
          "questionTypeId": 2
      },
      {
          "id": 5,
          "name": "vertical",
          "questionTypeId": 2
      },
      {
          "id": 6,
          "name": "nps_vertical",
          "questionTypeId": 2
      },
      {
          "id": 7,
          "name": "vertical",
          "questionTypeId": 3
      },
      {
          "id": 8,
          "name": "with_button",
          "questionTypeId": 4
      },
      {
          "id": 9,
          "name": "without_button",
          "questionTypeId": 4
      },
      {
          "id": 10,
          "name": "with_image",
          "questionTypeId": 4
      },
      {
          "id": 11,
          "name": "text_multiple",
          "questionTypeId": 5
      },
      {
          "id": 12,
          "name": "skip",
          "questionTypeId": 6
      },
      {
          "id": 13,
          "name": "show_text",
          "questionTypeId": 6
      },
      {
          "id": 14,
          "name": "default",
          "questionTypeId": 7
      },
      {
          "id": 15,
          "name": "unique_radio_button",
          "questionTypeId": 8
      },
      {
          "id": 16,
          "name": "input_edit_text",
          "questionTypeId": 8
      },
      {
          "id": 17,
          "name": "input_date_text",
          "questionTypeId": 8
      },
      {
          "id": 18,
          "name": "unique_spinner",
          "questionTypeId": 8
      }
  ],
  "setting": {
      "screenIdleTime": 10,
      "currentAppVersion": 12,
      "beginSync": 2,
      "syncInterval": 2,
      "endSync": 3
  }
}

module.exports = {
  surveys,
  survey2,
  survey3,
  survey4,
};
