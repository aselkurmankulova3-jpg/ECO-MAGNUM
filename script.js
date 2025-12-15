document.getElementById("plasticForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("status").innerText =
        "Рахмет! Өтініш қабылданды. Magnum өкілі сізбен хабарласады.";
});
