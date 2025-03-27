import { defineStore } from 'pinia';

function makeTocTree(
	tocList,
	startLevel = 1,
	endLevel = 3,
) {
	const tree = [];

	for (let i = 0; i < tocList.length; ++i) {
		if (
			tocList[i].level >= startLevel
			&& tocList[i].level <= endLevel
		) {
			let children = tree;
			for (let j = 0; j < tocList[i].level - startLevel; ++j) {
				children = (
					children
					?.[children.length - 1]
					?.children
				);
			}
			if (children) {
				children.push(tocList[i]);
			}
		}
	}

	return tree;
}

export const useMenuStore = (
	defineStore(
		'menu',
		{

			state() {
				return {

					menu: undefined,

				};
			},

			getters: {},

			actions: {

				updateMenu(
					tocList,
					startLevel,
					endLevel,
				) {
					this.menu = (
						tocList
						? makeTocTree(
							tocList,
							startLevel,
							endLevel,
						)
						: undefined
					);
				},

			},

		},
	)
);
