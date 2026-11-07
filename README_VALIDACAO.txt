RotorMind 2.9 — candidato a validação no iPad (07/11/2026)

IMPLEMENTADO NESTA ENTREGA
- Leitor PDF com limite de 8 páginas em canvas e descarte de páginas distantes; protege memória gráfica do iPad.
- Correção de liberação de canvas ao fechar o leitor.
- Cache PWA versionado e restrito a arquivos do aplicativo e dependências explícitas.
- Mantido o banco aviator_ai_db e o backup/restauração da versão anterior.

INSTALAÇÃO
1. Descompactar este ZIP e publicar TODOS os arquivos em HTTPS, na mesma origem e caminho da versão anterior.
2. Safari > Compartilhar > Adicionar à Tela de Início.
3. Ajustes > verificar biblioteca e preparar offline.
4. Fazer backup antes de importar dados reais ou atualizar versões.

VALIDAÇÃO NECESSÁRIA NO IPAD
[ ] Instalação do PWA no Safari
[ ] Importação e busca de PDF de teste não confidencial
[ ] Abrir resultado na página correta; rolar 100+ páginas sem travamento
[ ] Exportar backup, importar em ambiente de teste, comparar contagens
[ ] Desligar internet e verificar busca/leitura e dependências
[ ] Exportar PDF/PPTX e inspecionar imagens e citações
[ ] Verificar que IA online pede consentimento antes de enviar textos

LIMITAÇÕES NÃO RESOLVIDAS
- Dependências CDN exigem preparação offline prévia; não estão incluídas no ZIP.
- Embeddings semânticos reais não implementados. A busca atual é lexical/BM25 com sinônimos.
- IA local WebLLM experimental; qualidade e desempenho não garantidos.
- IA online exige conta/chave e permissão de uso dos documentos.
- Sem validação de execução no Safari/iPad ou testes end-to-end.
- Não publicar manuais CHC ou credenciais no GitHub Pages.
