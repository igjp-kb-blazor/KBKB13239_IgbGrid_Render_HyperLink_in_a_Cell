// BodyTemplateScript パラメーターに指定することで、セルのレンダリング内容をカスタマイズする関数を登録・定義します。
// この .js ファイルは、Blazor のフォールバックページ (Blazor WebAssembly なら wwwroot/index.html) にて script タグで読み込んでおきます。

igRegisterScript("urlColumnTemplate", (context) => {

    // 引数 context には、セルの情報が格納されており、行データまで参照可能です。
    const productName = context.cell.row.data.Name;
    const productUrl = context.cell.row.data.URL;

    // セル内に表示する DOM 要素を生成して返却します。
    const a = document.createElement("a");
    a.textContent = productName;
    a.href = productUrl;
    return a;

    // または、以下のように igTemplating.html ヘルパー関数を使用しても同様の結果を得られます。
    // (参考URL: https://kb.jp.infragistics.com/?p=12512)
    // return igTemplating.html`<a href="${productUrl}">${productName}</a>`;
}, false)