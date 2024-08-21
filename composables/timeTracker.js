import { provide, inject, ref } from 'vue';

export function provideTracker() {
    const trackedTime = ref(null);
    const setTrackedTime = (newTrack) => {
        trackedTime.value = newTrack;
    }
    provide('trackTime', trackedTime);
    provide('setTrackTime', setTrackedTime);
    return {
        trackedTime,
        setTrackedTime
    }
}

export function useTracker() {
    const trackedTime = inject('trackTime');
    const setTrackedTime = inject('setTrackTime');
    if (!trackedTime || !setTrackedTime) {
        throw new Error('Tracker must be provided before useTracker is called');
    }
    return { trackedTime, setTrackedTime }
}