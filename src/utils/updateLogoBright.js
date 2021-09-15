const updateLogoBright = (CONFIG) => {
    if (CONFIG.reverseUpdateLogoBright) {
        if (CONFIG.shadowAlpha_2 < 80) {
            CONFIG.shadowAlpha_2 = CONFIG.shadowAlpha_2 + .1
            document.documentElement.style.setProperty("--shadowAlpha_2", CONFIG.shadowAlpha_2 + "px")
        } else {
            CONFIG.reverseUpdateLogoBright = false
        }
    } else {
        if (CONFIG.shadowAlpha_2 > 30) {
            CONFIG.shadowAlpha_2 = CONFIG.shadowAlpha_2 - .1
            document.documentElement.style.setProperty("--shadowAlpha_2", CONFIG.shadowAlpha_2 + "px")
        } else {
            CONFIG.reverseUpdateLogoBright = true
        }
    }
}
export default updateLogoBright