ROTORMIND 3.0 — PUBLICAÇÃO SEGURA NO GITHUB PAGES

1. Faça backup da biblioteca no aplicativo atual, antes de alterar o endereço.
2. Crie um repositório privado ou público no GitHub. Atenção: GitHub Pages publica o site; nunca inclua PDFs internos, chaves ou backups no repositório.
3. Envie os arquivos do ZIP para a raiz do repositório: index.html, sw.js, manifest.webmanifest, icons/.
4. Em Settings > Pages selecione Deploy from a branch, branch main, / (root).
5. Aguarde o endereço HTTPS, abra no Safari do iPad e escolha Compartilhar > Adicionar à Tela de Início.
6. Em Ajustes do RotorMind toque Verificar instalação. Depois importe um PDF público, pesquise, abra uma página e faça backup/restauração.
7. Mantenha o mesmo domínio e caminho em todas as versões para preservar a biblioteca IndexedDB. Mudanças de origem não migram dados automaticamente.
8. A primeira visita requer internet. O uso offline depende das bibliotecas externas terem sido preparadas e do cache permanecer disponível.
9. Não habilite IA online para documentos restritos sem autorização institucional. A chave de API no navegador não é segura para distribuição pública/comercial; use um backend autenticado.

LIMITAÇÕES: não há embeddings semânticos, não há backend autenticado, nem testes reais de iPad concluídos. Não declare homologação aeronáutica.
