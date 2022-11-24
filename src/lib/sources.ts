import type { SourceType } from './types';

const sources: SourceType[] = [
	{
		icon: 'linear.png',
		name: 'Linear',
		url: 'https://linear.app',
		backgrounds: ['#313248', '#292A35', '#272832', '#21232E', '#191A23', '#151621'],
		text: ['#FFFFFF', '#EEEFFC', '#D2D3E0', '#858699', '#4C4F6B'],
		borders: ['#313248', '#2C2D3C', '#212234', '#191A23'],
		primaries: [
			'#F2C94C',
			'#F2994A',
			'#26B5CE',
			'#28A745',
			'#59A200',
			'#DB6E1F',
			'#EB5757',
			'#5E6AD2',
			'#0F7488',
			'#0F783C',
			'#4C4F6B'
		]
	},
	{
		icon: 'github.png',
		name: 'GitHub',
		url: 'https://github.com',
		backgrounds: [
			'#FFFFFF1A',
			'#FFFFFF29',
			'#FFFFFF1F',
			'#388BFD26',
			'#6E768166',
			'#6E7681',
			'#21262D',
			'#161B22',
			'#0D1117',
			'#010409'
		],
		primaries: [
			'#178600',
			'#1F6FEB',
			'#238636',
			'#3178C6',
			'#3572A5',
			'#3FB950',
			'#673281',
			'#B07219',
			'#DB61A2',
			'#DEA584',
			'#F05138',
			'#F1E05A',
			'#F78166'
		],
		text: ['#FFFFFF', '#FFFFFFB3', '#FFFFFFAB', '#F0F6FC', '#CDD9E4', '#C9D1D9'],
		borders: ['#FFFFFF33', '#F0F6FC', '#F0F6FC1A', '#C9D1D9', '#ADBAC6']
	}
];

export default sources;
