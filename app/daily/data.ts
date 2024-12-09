// 获取每日一句 - https://github.com/vv314/quotes?tab=readme-ov-file#金山词霸
export async function getDailySentence(date: string | null) {
    // yyyy-MM-dd，默认当前日期
    const api = `https://open.iciba.com/dsapi?file=json${date ? `&date=${date}` : ''}`;
    const res = await fetch(api)
    const data = await res.json();
    return data;
}