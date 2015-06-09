import q from 'q'

//debug
import data from '../../../dummydata/sample.json';

export default {
    fetch: () => {
        let deferred = q.defer();

        //Simulate slow api
        setTimeout(() => {
            deferred.resolve({
                data: data
            })
        }, 2000)

        return deferred.promise;
    }
}
