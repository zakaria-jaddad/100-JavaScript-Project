function isValidDate(day, month, year) {

    const userDate = new Date(year, parseInt(month) - 1, day);

    const currentDate = new Date();
    if (userDate > currentDate ) {
        return false;
    }
    if (!(userDate.getFullYear() == year && userDate.getMonth() == month - 1 && userDate.getDate() == day)) {
        return false;
    }
    return true;
}

module.exports = { isValidDate };