import generateUniqueKey from "../../app/utils/generateUniqueKey";

describe('Generate Unique Key', () => {
    it('should generate an unique key of api', () => {
        const key = generateUniqueKey();

        expect(key).toHaveLength(12);
    });
});