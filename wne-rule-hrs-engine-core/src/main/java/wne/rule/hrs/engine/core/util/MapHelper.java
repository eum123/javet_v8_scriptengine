package wne.rule.hrs.engine.core.util;

import java.util.List;
import java.util.Map;

public class MapHelper {

    private static Object find(List list, String path) {
        String key = path.substring(0, path.indexOf("."));
        int index = getIndex(key);

        Object obj = list.get(index);

        if(hasNext(path)) {
            if(obj instanceof Map) {
                return find((Map)obj, nextPath(path));
            } else if(obj instanceof List) {
                return find((List)obj, nextPath(path));
            } else {
                //다음 키가있으나 데이터가 collection이 아닌 경우
                return "";
            }
        } else {
            return obj;
        }

    }

    /**
     * path형식( aaa.aaa.aaa) 의 key를 이용하여 map에서 값을 구한다.
     * @param map
     * @param path
     * @return
     */
    public static Object find(Map map, String path) {

        if(hasNext(path)) {
            //여러개 인경우

            String key = path.substring(0, path.indexOf("."));
            if(isArray(key)) {
                //키가 배열인 경우
                Object searchObject = map.get(getKey(key));

                if(searchObject instanceof List) {
                    return find((List)searchObject, path);
                } else {
                    //데이터가 배열이 아닌데 path가 배열인 한경우
                    return "";
                }

            } else {
                Object searchObject = map.get(getKey(key));
                if(searchObject instanceof Map) {
                    return find((Map)searchObject, nextPath(path));
                } else {
                    //key설정과 데이터가 불일치 하는 경우
                    return "";
                }
            }
        } else {
            if(isArray(path)) {
                //키가 배열인 경우
                Object searchObject = map.get(getKey(path));

                if(searchObject instanceof List) {
                    int index = getIndex(path);

                    if(index >= ((List)searchObject).size()) {
                        return "";
                    } else {
                        return ((List) searchObject).get(index);
                    }
                } else {
                    //데이터가 배열이 아닌데 path가 배열인 한경우
                    return "";
                }
            }
            return map.get(path);
        }
    }

    private static String nextPath(String key) {
        if(key.contains(".") ) {
            return key.substring(key.indexOf(".") + 1);
        }
        return key;
    }

    private static int getIndex(String key) {
        return Integer.parseInt(key.substring(key.indexOf("[") + 1, key.indexOf("]")));
    }

    private static String getKey(String key) {
        if(key.indexOf("[") > 0 && key.indexOf("]") > 0) {
            return key.substring(0, key.indexOf("["));
        }
        return key;
    }

    private static boolean isArray(String key) {
        if(key.indexOf("[") > 0 && key.indexOf("]") > 0) {
            return true;
        }
        return false;
    }


    private static boolean hasNext(String path) {
        return path.contains(".");
    }

}
