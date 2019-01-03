export default {
        removeSpaces: function(latex) {
        let newLatex = "";
        const latexArr = latex.split("");

        let i = 0;
        while (i < latexArr.length) {
            const firstChar = latexArr[i];
            const secondChar = latexArr[i+1]; 
            
            if (!(firstChar === "\\" && secondChar === " ")) {
                newLatex += firstChar;
                i++;
            } else {
                i = i + 2;
            }
        }

        return newLatex;
    }
}