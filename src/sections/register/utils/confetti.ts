import { CSSProperties } from "react";

export const canvasStyles: CSSProperties = {
	position: 'fixed',
	pointerEvents: 'none',
	width: '100%',
	height: '100%',
	top: 0,
	left: 0,
	zIndex: 99999999999999,
}


function randomInRange(min: number, max: number) {
	return Math.random() * (max - min) + min
}

export function getAnimationSettings(originXA: any, originXB: any) {
	return {
		startVelocity: 30,
		spread: 360,
		ticks: 60,
		zIndex: 0,
		particleCount: 150,
		origin: {
			x: randomInRange(originXA, originXB),
			y: Math.random() - 0.2,
		},
	}
}