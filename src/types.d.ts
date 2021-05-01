// Type to determine navigation options on header
interface NavMap {
    [key: string]: {
        icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
        route?: string,
        children?: {
            [key: string]:{
                icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>,
                route: string,
            },
        },
    };
}
