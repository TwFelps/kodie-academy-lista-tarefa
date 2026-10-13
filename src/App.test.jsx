import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

describe('TaskFlow', () => {
  it('exibe as tarefas iniciais e a quantidade de pendentes', () => {
    render(<App />)
    expect(screen.getByText('Estudar useState')).toBeInTheDocument()
    expect(screen.getByText('Criar testes com Vitest')).toBeInTheDocument()
    expect(screen.getByText('2 pendente(s)')).toBeInTheDocument()
  })

  it('adiciona uma tarefa com título preenchido', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByLabelText('Título da tarefa'), 'Praticar debugging')
    await user.click(screen.getByRole('button', { name: 'Adicionar' }))
    expect(screen.getByText('Praticar debugging')).toBeInTheDocument()
    expect(screen.getByLabelText('Título da tarefa')).toHaveValue('')
  })

  it('não adiciona uma tarefa vazia ou só com espaços', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Adicionar' }))
    await user.type(screen.getByLabelText('Título da tarefa'), '   ')
    await user.click(screen.getByRole('button', { name: 'Adicionar' }))
    expect(screen.getAllByRole('listitem')).toHaveLength(3)
  })

  it('filtra para mostrar apenas tarefas pendentes', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.selectOptions(screen.getByLabelText('Filtrar'), 'pending')
    const list = screen.getByRole('list')
    expect(within(list).getByText('Estudar useState')).toBeInTheDocument()
    expect(within(list).queryByText('Criar testes com Vitest')).not.toBeInTheDocument()
  })

  it('marca uma tarefa como concluída e atualiza o contador', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('checkbox', { name: 'Concluir Estudar useState' }))
    expect(screen.getByText('1 pendente(s)')).toBeInTheDocument()
  })

  it('exclui uma tarefa', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Excluir Estudar useState' }))
    expect(screen.queryByText('Estudar useState')).not.toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
})