# Conecta Solidária — ARQIWEB2

Projeto do tema 1 (Economia Solidária), desenvolvido com React + Vite, Supabase e CSS Modules.

## 1. Instalar e executar

Instale Node.js e, nesta pasta, execute:

```bash
npm install
```

## 2. Criar o banco no Supabase

1. Crie um projeto em https://supabase.com (região South America / São Paulo).
2. Abra **SQL Editor > New query**.
3. Cole todo o conteúdo de `supabase/schema.sql` e clique em **Run**.
4. Confirme em **Table Editor** que a tabela `opinioes` existe e tem RLS ativada.
5. Copie a **Project URL** e a **Publishable key** (`sb_publishable_...`). **Nunca use a Secret key no frontend.**

## 3. Conectar o projeto

Copie `.env.example` para `.env` e substitua os valores:

```env
VITE_SUPABASE_URL=https://SEU-ID.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_SUA_CHAVE
```

Reinicie o servidor após alterar o `.env`:

```bash
npm run dev
```

Abra o endereço exibido pelo Vite. Envie uma resposta e confira a tabela no Supabase. A aba Resultados deve exibir as respostas.

## 4. Publicar no Netlify

1. Envie os arquivos ao GitHub, sem incluir o `.env`.
2. Em https://netlify.com, escolha **Add new site > Import an existing project**.
3. Selecione o repositório.
4. Configure **Build command:** `npm run build` e **Publish directory:** `dist`.
5. Adicione em **Environment variables** as duas variáveis `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY` com os mesmos valores do `.env`.
6. Faça o deploy e teste o formulário no celular.

Alternativa: rode `npm run build` localmente e arraste a pasta `dist` para um deploy manual no Netlify. Repita a cada atualização.

## 5. Testes antes da entrega

- Enviar resposta e conferir no Table Editor.
- Conferir contagem, média e comentários na aba Resultados.
- Desligar a internet e tentar enviar: deve aparecer erro.
- Testar com a tabela vazia: a página deve mostrar mensagem adequada.
- Conferir que não existem políticas de UPDATE e DELETE no Supabase; tentar excluir registros com a chave pública não deve apagá-los.

**Entrega:** 24/11/2026 — link publicado, link do repositório e questionário individual.

## Estrutura

- `src/App.jsx`: navegação condicional entre telas.
- `src/components/Sobre.jsx`: texto sobre o tema e fontes.
- `src/components/Formulario.jsx`: formulário controlado, insert e estados.
- `src/components/Resultados.jsx`: select, agregação, média e comentários.
- `src/components/SectionCard.jsx`: componente reutilizável com props desestruturadas.
- `src/components/*.module.css`: estilos por componente.
- `src/supabase.js`: cliente Supabase com variáveis de ambiente.
- `supabase/schema.sql`: tabela e políticas RLS.

**Observação:** este projeto foi preparado, mas você precisa inserir suas próprias credenciais e publicar em suas contas para ficar online.
