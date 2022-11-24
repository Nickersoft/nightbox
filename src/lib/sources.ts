import type { SourceType } from './types';

const sources: SourceType[] = [
	{
		icon: 'linear.png',
		name: 'Linear',
		url: 'https://linear.app',
		colors: {
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
		}
	},
	{
		icon: 'obsidian.png',
		name: 'Obsidian',
		url: 'https://obsidian.md',
		colors: {
			backgrounds: ['#8C8C8C1F', '#454545', '#262626B3'],
			text: ['#FFFFFF4D', '#D1D1D1', '#999999'],
			borders: ['#363636', '#00000026']
		}
	},
	{
		icon: 'mochi.png',
		name: 'Mochi',
		url: 'https://mochi.cards',
		colors: {
			backgrounds: [
				'#FFFFFF24',
				'#FFFFFF0D',
				'#FFFFFFCC',
				'#CACCCE',
				'#2EAADC1A',
				'#575759',
				'#53535466',
				'#3C3D3F',
				'#2E2F31',
				'#242426',
				'#222222',
				'#00000033',
				'#0000004D',
				'#0000001A'
			],
			borders: [
				'#FFFFFF1A',
				'#FFFFFFB3',
				'#FFFFFF0A',
				'#FFFFFF33',
				'#3333331A',
				'#222222',
				'#0000004D',
				'#00000080'
			],
			text: [
				'#0F0F0F',
				'#0F0F0F80',
				'#0F0F0FB3',
				'#222222',
				'#242426',
				'#2E2F31',
				'#2EAADC1A',
				'#3C3D3F',
				'#53535466',
				'#575759',
				'#CACCCE',
				'#CACCCE99',
				'#FFFFFF',
				'#FFFFFF0D',
				'#FFFFFF24',
				'#FFFFFF40',
				'#FFFFFF4D',
				'#FFFFFF66',
				'#FFFFFF99',
				'#FFFFFFB3',
				'#FFFFFFCC',
				'#FFFFFFE6'
			],
			primaries: ['#539BF5', '#54BBEC', '#E16259', '#539BF5']
		}
	},
	{
		icon: 'tabby.png',
		name: 'Tabby',
		url: 'https://tabby.sh',
		colors: {
			backgrounds: [
				'#000000A6',
				'#000000B3',
				'#131D27',
				'#181E23',
				'#27313CA6',
				'#FFFFFF20',
				'#FFFFFF33',
				'#FFFFFF40'
			],
			primaries: ['#0275D8', '#A1C5E4', '#842FE0', '#0275D8'],
			text: [
				'#000000',
				'#000000B3',
				'#131D27',
				'#AAAAAA',
				'#AAAAAA',
				'#CCCCCC',
				'#DDDDDD',
				'#FFFFFF'
			],
			borders: ['#FFFFFF40', '#181E23', '#111111']
		}
	},
	{
		icon: 'code.png',
		name: 'Visual Studio Code',
		url: 'https://code.visualstudio.com/',
		colors: {
			backgrounds: ['#3A3D41', '#333333', '#252526', '#1E1E1E', '#79797966'],
			borders: ['#CCCCCC33'],
			primaries: [
				'#16825D',
				'#3794FF',
				'#007ACC',
				'#0E639C',
				'#2979FF',
				'#007ACC',
				'#16825D',
				'#0E639C'
			],
			text: [
				'#79797966',
				'#3A3D41',
				'#333333',
				'#252526',
				'#1E1E1E',
				'#FFFFFF66',
				'#FFFFFF',
				'#CCCCCC',
				'#C5C5C5',
				'#BBBBBB',
				'#000000'
			]
		}
	},
	{
		icon: 'notion.png',
		name: 'Notion',
		url: 'https://notion.so',
		colors: {
			primaries: ['#625DF5', '#CF3917'],
			borders: ['#FFFFFF', '#FFFFFF48', '#FFFFFF18', '#767676'],
			backgrounds: ['#FFFFFF0E', '#FFFFFF18', '#9B9B9B', '#252525', '#202020', '#191919'],
			text: ['#FFFFFF', '#F6F6F6', '#9B9B9B', '#000000']
		}
	},
	{
		icon: 'github.png',
		name: 'GitHub',
		url: 'https://github.com',
		colors: {
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
	}
];

export default sources;
