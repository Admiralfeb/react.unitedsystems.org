/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type StandardRatings = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
export type AllRatings = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";

/**
 * The details for a specific ship build/loadout
 */
export interface ICoriolisLoadout {
    /**
     * The name of the build/loadout
     */
    name: string;
    /**
     * The full display name of the ship
     */
    ship: string;
    /**
     * The ship manufacturer
     */
    manufacturer?: string;
    /**
     * 3rd Party references and/or links to this build/loadout
     */
    references: {
        /**
         * The name of the 3rd party, .e.g 'Coriolis.io' or 'E:D Shipyard'
         */
        name: string;
        /**
         * The link/url to the 3rd party referencing this build/loadout
         */
        url: string;
        [k: string]: unknown;
    }[];
    /**
     * The components used by this build
     */
    components: {
        /**
         * The set of standard components across all ships
         */
        standard: {
            bulkheads:
            | "Lightweight Alloy"
            | "Reinforced Alloy"
            | "Military Grade Composite"
            | "Mirrored Surface Composite"
            | "Reactive Surface Composite";
            cargoHatch: {
                enabled: boolean;
                priority: number;
                [k: string]: unknown;
            };
            powerPlant: {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };

                [k: string]: unknown;
            };
            thrusters: {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                /**
                 * The name identifing the thrusters (if applicable), e.g. 'Enhanced Performance'
                 */
                name?: string;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            frameShiftDrive: {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            lifeSupport: {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            powerDistributor: {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            sensors: {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
            fuelTank: {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            };
        };
        internal: [
            {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                /**
                 * The group of the component, e.g. 'Shield Generator', or 'Cargo Rack'
                 */
                group: string;
                /**
                 * The name identifying the component (if applicable), e.g. 'Advance Discovery Scanner', or 'Detailed Surface Scanner'
                 */
                name?: string;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null,
            {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                /**
                 * The group of the component, e.g. 'Shield Generator', or 'Cargo Rack'
                 */
                group: string;
                /**
                 * The name identifying the component (if applicable), e.g. 'Advance Discovery Scanner', or 'Detailed Surface Scanner'
                 */
                name?: string;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null,
            {
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                /**
                 * The group of the component, e.g. 'Shield Generator', or 'Cargo Rack'
                 */
                group: string;
                /**
                 * The name identifying the component (if applicable), e.g. 'Advance Discovery Scanner', or 'Detailed Surface Scanner'
                 */
                name?: string;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null,
            ...({
                class: number;
                rating: StandardRatings;
                enabled: boolean;
                priority: number;
                /**
                 * The group of the component, e.g. 'Shield Generator', or 'Cargo Rack'
                 */
                group: string;
                /**
                 * The name identifying the component (if applicable), e.g. 'Advance Discovery Scanner', or 'Detailed Surface Scanner'
                 */
                name?: string;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null)[]
        ];
        hardpoints: [
            {
                class: number;
                rating: AllRatings;
                enabled: boolean;
                priority: number;
                mount: "Fixed" | "Gimballed" | "Turret";
                /**
                 * The group of the component, e.g. 'Beam Laser', or 'Missile Rack'
                 */
                group: string;
                /**
                 * The name identifing the component (if applicable), e.g. 'Retributor', or 'Mining Lance'
                 */
                name?: string;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null,
            ...({
                class: number;
                rating: AllRatings;
                enabled: boolean;
                priority: number;
                mount: "Fixed" | "Gimballed" | "Turret";
                /**
                 * The group of the component, e.g. 'Beam Laser', or 'Missile Rack'
                 */
                group: string;
                /**
                 * The name identifing the component (if applicable), e.g. 'Retributor', or 'Mining Lance'
                 */
                name?: string;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null)[]
        ];
        utility: [
            {
                class: number;
                rating: AllRatings;
                enabled: boolean;
                priority: number;
                /**
                 * The group of the component, e.g. 'Shield Booster', or 'Kill Warrant Scanner'
                 */
                group: string;
                /**
                 * The name identifing the component (if applicable), e.g. 'Point Defence', or 'Electronic Countermeasure'
                 */
                name?: string;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null,
            ...({
                class: number;
                rating: AllRatings;
                enabled: boolean;
                priority: number;
                /**
                 * The group of the component, e.g. 'Shield Booster', or 'Kill Warrant Scanner'
                 */
                group: string;
                /**
                 * The name identifing the component (if applicable), e.g. 'Point Defence', or 'Electronic Countermeasure'
                 */
                name?: string;
                blueprint?: {
                    [k: string]: unknown;
                };
                modifications?: {
                    [k: string]: unknown;
                };
                [k: string]: unknown;
            } | null)[]
        ];
    };
    /**
     * Optional statistics from the build
     */
    stats?: {
        agility?: number;
        /**
         * Sum of base armour + any hull reinforcements
         */
        armour?: number;
        /**
         * Armour added through Hull reinforcement
         */
        armourAdded?: number;
        baseShieldStrength?: number;
        baseArmour?: number;
        /**
         * Maximum boost speed of the ships (4 pips, straight-line)
         */
        boost?: number;
        cargoCapacity?: number;
        /**
         * Ship Class/Size [Small, Medium, Large]
         */
        class?: 1 | 2 | 3;
        /**
         * Total damage dealt per second of all weapons
         */
        totalDps?: number;
        /**
         * Total energy consumed per second of all weapons
         */
        totalEps?: number;
        /**
         * Total heat generated per second of all weapons
         */
        totalHps?: number;
        /**
         * Cost of the ship's hull
         */
        hullCost?: number;
        /**
         * Mass of the Ship hull only
         */
        hullMass?: number;
        /**
         * Multiplier for explosive damage to hull
         */
        hullExplRes?: number;
        /**
         * Multiplier for kinetic damage to hull
         */
        hullKinRes?: number;
        /**
         * Multiplier for thermal damage to hull
         */
        hullThermRes?: number;
        fuelCapacity?: number;
        /**
         * Single Jump range with a full tank (unladenMass + fuel)
         */
        fullTankRange?: number;
        /**
         * Mass of the Ship + fuel + cargo (hull + all components + fuel tank + cargo capacity)
         */
        ladenMass?: number;
        /**
         * Single Jump range with full cargo load, see ladenMass
         */
        ladenRange?: number;
        /**
         * Mass Lock Factor of the Ship
         */
        masslock?: number;
        /**
         * Shield strength in Mega Joules (Mj)
         */
        shield?: number;
        /**
         * Multiplier for explosive damage to shields
         */
        shieldExplRes?: number;
        /**
         * Multiplier for kinetic damage to shields
         */
        shieldKinRes?: number;
        /**
         * Multiplier for thermal damage to shields
         */
        shieldThermRes?: number;
        /**
         * Maximum speed of the ships (4 pips, straight-line)
         */
        speed?: number;
        /**
         * Total cost of the loadout, including discounts
         */
        totalCost?: number;
        /**
         * Single Jump range when unladen, see unladenMass
         */
        unladenRange?: number;
        /**
         * Mass of the Ship (hull + all components)
         */
        unladenMass?: number;
        [k: string]: unknown;
    };
    [k: string]: unknown;
}
