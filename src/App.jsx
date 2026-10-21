import { useState } from 'react'

const tarefasIniciais = [
  { id: 1, title: 'Estudar useState', done: false },
  { id: 2, title: 'Criar testes com Vitest', done: true },
  { id: 3, title: 'Revisar componentes React', done: false },
]

export default function App() {
  const [tarefas, setTarefas] = useState(tarefasIniciais)
  const [titulo, setTitulo] = useState('')
  const [filtro, setFiltro] = useState('all')

  const tarefasVisiveis = tarefas.filter((tarefa) => {
    if (filtro === 'pending') return tarefa.done === false
    if (filtro === 'done') return tarefa.done === true
    return true
  })

  function adicionarTarefa(evento) {
    evento.preventDefault()
    const tituloLimpo = titulo.trim()

    if (tituloLimpo.length === 0) return

    const novaTarefa = {
      id: crypto.randomUUID(),
      title: tituloLimpo,
      done: false,
    }

    setTarefas((tarefasAtuais) => [...tarefasAtuais, novaTarefa])
    setTitulo('')
  }

  function alternarTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, done: !tarefa.done } : tarefa,
      ),
    )
  }

  function excluirTarefa(id) {
    setTarefas((tarefasAtuais) =>
      tarefasAtuais.filter((tarefa) => tarefa.id !== id),
    )
  }

  const totalPendentes = tarefas.filter((tarefa) => !tarefa.done).length

  return (
    <main className="aplicativo">
      <header className="destaque">
        <h1>TaskFlow</h1>
        <p>Organize suas tarefas, uma etapa por vez.</p>
      </header>

      <section className="painel">
        <h2>Nova tarefa</h2>
        <form onSubmit={adicionarTarefa} className="formulario-tarefa">
          <label htmlFor="titulo-tarefa">Título da tarefa</label>
          <div className="linha-formulario">
            <input
              id="titulo-tarefa"
              value={titulo}
              onChange={(evento) => setTitulo(evento.target.value)}
              placeholder="Ex.: estudar React"
            />
            <button type="submit">Adicionar</button>
          </div>
        </form>
      </section>

      <section className="painel">
        <div className="cabecalho-lista">
          <div>
            <h2>Minhas tarefas</h2>
            <p className="discreto">{totalPendentes} pendente(s)</p>
          </div>
          <label className="rotulo-filtro">
            Filtrar
            <select
              value={filtro}
              onChange={(evento) => setFiltro(evento.target.value)}
            >
              <option value="all">Todas</option>
              <option value="pending">Pendentes</option>
              <option value="done">Concluídas</option>
            </select>
          </label>
        </div>

        {tarefasVisiveis.length === 0 ? (
          <p className="vazio">Nenhuma tarefa por aqui.</p>
        ) : (
          <ul className="lista-tarefas">
            {tarefasVisiveis.map((tarefa) => (
              <li className="tarefa" key={tarefa.id}>
                <label
                  className={
                    tarefa.done ? 'titulo-tarefa concluida' : 'titulo-tarefa'
                  }
                >
                  <input
                    type="checkbox"
                    checked={tarefa.done}
                    onChange={() => alternarTarefa(tarefa.id)}
                    aria-label={`Concluir ${tarefa.title}`}
                  />
                  <span>{tarefa.title}</span>
                </label>
                <button
                  className="botao-excluir"
                  type="button"
                  onClick={() => excluirTarefa(tarefa.id)}
                  aria-label={`Excluir ${tarefa.title}`}
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <footer>Projeto de estudo — encontre os bugs antes de refatorar.</footer>
    </main>
  )
}
