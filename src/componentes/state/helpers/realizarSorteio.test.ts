import React from "react"
import { realizarSorteio } from "./realizarSorteio"

describe('Dado umsorteio de amigo secreto', () => {
  test('Cada participante não sorteie o próprio nome', () => {
    const participantes = [
      'Ana',
      'catarina',
      'Juliana',
      'joao',
      'Vinicios',
      'Natalia'
    ]

    const sorteio = realizarSorteio(participantes)
    participantes.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    });
  })
})