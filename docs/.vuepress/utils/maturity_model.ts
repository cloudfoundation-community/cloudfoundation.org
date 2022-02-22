import { index } from "../index";


function getCategoryData(category: string): any {

    const result = index.filter(item => item.meta.category === category)
    return result.map((item) => {

        return {
            "file": item ?.file,
            "meta": {
                "id": item.meta ?.id,
                "url": item.meta ?.url,
                "title": item.meta ?.title,
                "category": item.meta ?.category,
                "layout": item.meta ?.layout
            },
            "properties": {
                "pillar": item.properties ?.pillar,
                "enables": item.properties ?.enables,
                "journey-stage": item.properties['journey-stage'] ? item.properties['journey-stage'].length / 2 : 0,
                "depends-on": item.properties['depends-on'],
                "scope": _scopeFormatter(item.properties ?.scope),
                "summary": item.properties ?.summary,
                "tool-implementations": item.properties['tool-implementations'],
                "name": item.properties ?.name
            }
        }
    }).sort(function (a, b) {
        return a.properties['journey-stage'] - b.properties['journey-stage'];
    });


}

function _scopeFormatter(scope: string): string {
    let cleanedScope = 'mix-turquoise-blue'

    if (scope === '☁️ Platform') {
        cleanedScope = 'purple';
    } else if (scope === '🏢 Core') {
        cleanedScope = 'blue';
    } else if (scope === '🛬 Landing Zone') {
        cleanedScope = 'turquoise';
    }

    return cleanedScope;
}

export { getCategoryData }
