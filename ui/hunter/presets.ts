import {
	Consumes,
	Flask,
	Food,
	Spec,
} from '../core/proto/common.js';
import { SavedTalents } from '../core/proto/ui.js';

import {
	Hunter_Rotation as HunterRotation,
	Hunter_Rotation_RotationType as RotationType,
	Hunter_Rotation_StingType as StingType,
	Hunter_Options as HunterOptions,
	Hunter_Options_Ammo as Ammo,
	Hunter_Options_PetType as PetType,
} from '../core/proto/hunter.js';

import * as PresetUtils from '../core/preset_utils.js';

import Phase1Gear from './gear_sets/phase1.json';

import MeleeWeaveP1 from './apls/melee.weave.25.json';
//import MmApl from './apls/mm.apl.json';
//import MmAdvApl from './apls/mm_advanced.apl.json';
//import SvApl from './apls/sv.apl.json';
//import SvAdvApl from './apls/sv_advanced.apl.json';
//import AoeApl from './apls/aoe.apl.json';

// Preset options for this spec.
// Eventually we will import these values for the raid sim too, so its good to
// keep them in a separate file.

export const GearBeastMasteryDefault = PresetUtils.makePresetGear('Phase 1', Phase1Gear, { talentTree: 0 })
export const GearMarksmanDefault = PresetUtils.makePresetGear('Phase 1', Phase1Gear, { talentTree: 1 })
export const GearSurvivalDefault = PresetUtils.makePresetGear('Phase 1', Phase1Gear, { talentTree: 2 })

export const DefaultSimpleRotation = HunterRotation.create({
	type: RotationType.SingleTarget,
	sting: StingType.SerpentSting,
	multiDotSerpentSting: true,
});

export const ROTATION_PRESET_MELEE_WEAVE_PHASE1 = PresetUtils.makePresetAPLRotation('Melee Weave P1', MeleeWeaveP1, { talentTree: 0 });

// Default talents. Uses the wowhead calculator format, make the talents on
// https://wowhead.com/classic/talent-calc and copy the numbers in the url.
export const BeastMasteryTalents = {
	name: 'Beast Mastery',
	data: SavedTalents.create({
		talentsString: '53000200501',
	}),
};

export const MarksmanTalents = {
	name: 'Marksman',
	data: SavedTalents.create({
		talentsString: '-050515',
	}),
};

export const SurvivalTalents = {
	name: 'Survival',
	data: SavedTalents.create({
		talentsString: '--33502001101',
	}),
};

export const DefaultOptions = HunterOptions.create({
	ammo: Ammo.RazorArrow,
	petType: PetType.WindSerpent,
	petTalents: {},
	petUptime: 1,
});

export const BMDefaultOptions = HunterOptions.create({
	ammo: Ammo.RazorArrow,
	petType: PetType.Cat,
	petTalents: {},
	petUptime: 1,
});

export const DefaultConsumes = Consumes.create({
	flask: Flask.FlaskUnknown,
	food: Food.FoodUnknown,
});
