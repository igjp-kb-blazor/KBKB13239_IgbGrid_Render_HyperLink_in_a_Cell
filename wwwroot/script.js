// BodyTemplateScript �p�����[�^�[�Ɏw�肷�邱�ƂŁA�Z���̃����_�����O���e���J�X�^�}�C�Y����֐���o�^�E��`���܂��B
// ���� .js �t�@�C���́ABlazor �̃t�H�[���o�b�N�y�[�W (Blazor WebAssembly �Ȃ� wwwroot/index.html) �ɂ� script �^�O�œǂݍ���ł����܂��B

igRegisterScript("urlColumnTemplate", (context) => {

    // ���� context �ɂ́A�Z���̏�񂪊i�[����Ă���A�s�f�[�^�܂ŎQ�Ɖ\�ł��B
    const productName = context.cell.row.data.Name;
    const productUrl = context.cell.row.data.URL;

    // �Z�����ɕ\������ DOM �v�f�𐶐����ĕԋp���܂��B
    const a = document.createElement("a");
    a.textContent = productName;
    a.href = productUrl;
    return a;

    // �܂��́A�ȉ��̂悤�� igTemplating.html �w���p�[�֐����g�p���Ă����l�̌��ʂ𓾂��܂��B
    // (�Q�lURL: https://kb.jp.infragistics.com/?p=12512)
    // return igTemplating.html`<a href="${productUrl}">${productName}</a>`;
}, false)