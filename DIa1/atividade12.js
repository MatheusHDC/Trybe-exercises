let peca = 'rei';

switch(peca){
    case 'pião':
        console.log('Se for o primeiro lance de um peão, ele pode avançar uma ou duas casas. Se um peão já se moveu na partida, ele pode avançar apenas uma casa por vez. Ele ataca (ou captura) uma casa na diagonal, para a esquerda ou direita, o pião é a unica peça que nao pode recuar.')
        break;
    case 'bispo':
        console.log('Um bispo pode mover na diagonal quantas casas quiser.')
        break;
    case 'cavalo':
        console.log('O cavalo é a única peça de xadrez que pode saltar sobre outra peça! Ele move uma casa para a esquerda ou para a direita na horizontal e depois duas casas para cima ou para baixo na vertical, OU ele move duas casas para a esquerda ou para a direita na horizontal e depois uma casa para cima ou para baixo na vertical - em outras palavras, o cavalo se move em "L".')
        break;
    case 'torre':
        console.log('Ela pode mover quantas casas quiser para esquerda ou direita (na horizontal), ou quantas casas quiser para cima ou para baixo (na vertical).')
        break;
    case 'dama':
        console.log('Pode mover quantas casas quiser na horizontal e na vertical (como a torre). A dama também pode mover quantas casas quiser na diagonal (como o bispo).')
        break;
    case 'rei':
        console.log('O rei não é uma peça muito poderosa, pois só pode se mover (ou capturar) uma casa em qualquer direção.')
        break;
}