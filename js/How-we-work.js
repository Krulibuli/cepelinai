document.querySelectorAll('[class^="gri"]').forEach(box => {

    box.onmouseover = () => {
        box.innerHTML += `
            <p>Some words about this step in our work.</p>
            <p>Some words about this step in our work.</p>
        `;
    };

});