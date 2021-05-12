function getCalPerMinBurned(MET, weight) {
    return 0.0175 * MET * weight;
}

function getCalBurned(MET, weight, time) {
    return 0.0175 * MET * weight * time;
}

module.exports = {
    getCalPerMinBurned: getCalPerMinBurned,
    getCalBurned: getCalBurned
};
