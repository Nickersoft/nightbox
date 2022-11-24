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
			'#0F7488',
			'#0F783C',
			'#26B5CE',
			'#28A745',
			'#4C4F6B',
			'#59A200',
			'#5E6AD2',
			'#DB6E1F',
			'#EB5757',
			'#F2994A',
			'#F2C94C'
		]
	},
	{
		icon: 'notion.png',
		name: 'Notion',
		url: 'https://notion.so',
		primaries: ['#625DF5', '#CF3917'],
		borders: ['#FFFFFF', '#FFFFFF48', '#FFFFFF18', '#767676'],
		backgrounds: ['#FFFFFF0E', '#FFFFFF18', '#9B9B9B', '#252525', '#202020', '#191919'],
		text: ['#FFFFFF', '#F6F6F6', '#9B9B9B', '#000000']
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
