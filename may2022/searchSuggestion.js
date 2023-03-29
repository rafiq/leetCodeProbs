var suggestedProducts = function(A, s) {
    A = A.sort();
    const T = { M: {}, A: [] };
    for (let a of A) {
        let N = T;
        for (let c of a) {
            if (!N.M[c]) N.M[c] = { M: {}, A: [] };
            N = N.M[c];
            if (N.A.length < 3) N.A.push(a);
        }
    }
    const B = [];
    let N = T;
    for (let c of s) {
        N = N && N.M[c];
        if (!N) B.push([]);
        else B.push(N.A);
    }
    return B;
};

/*
First Solution: Linear Search
The idea is that as user types more characters, the number of candidates decreases.
The candidates at first is the entire `products` array but as we enter each character,
we should update the candidates.
*/
var suggestedProducts = function (products, searchWord) {
    products.sort();
    let candidates = products.slice(),
      res = [];
    for (let i = 0; i < searchWord.length; i++) {
      let nextCandidates = [];
      for (let j = 0; j < candidates.length; j++) {
        if (candidates[j][i] === searchWord[i]) {
          nextCandidates.push(candidates[j]);
        }
      }
      nextCandidates.length > 3
        ? res.push(nextCandidates.slice(0, 3))
        : res.push(nextCandidates);
      candidates = nextCandidates;
    }
    return res;
    // T.C: O(Nlog(N) + MN), M = length of searchWord, N = length of products
    // S.C: O(N)
  };
  /*
  Second Solution: Binary Search
  */
  var suggestedProducts = function (products, searchWord) {
    products.sort();
    let res = [],
      candidates = products.slice();
    for (let i = 0; i < searchWord.length; i++) {
      // Find the first occurrence and the last occurrence of matching word
      // All words between the first occurrence and the last occurrence are the next candidates
      let nextCandidates = [];
      let start = findOccurrence(candidates, searchWord, i, true);
      let end = findOccurrence(candidates, searchWord, i, false);
      if (start !== -1) {
        for (let j = start; j <= end; j++) {
          nextCandidates.push(candidates[j]);
        }
      }
      nextCandidates.length > 3
        ? res.push(nextCandidates.slice(0, 3))
        : res.push(nextCandidates);
      candidates = nextCandidates;
    }
    return res;
    // T.C: O(Nlog(N) + Mlog(N)), M = length of searchWord, N = length of products
    // S.C: O(N)
  };

  function findOccurrence(candidates, searchWord, i, findFirst) {
    let idx = -1;
    let low = 0,
      high = candidates.length - 1;
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);
      if (candidates[mid][i] > searchWord[i]) {
        high = mid - 1;
      } else if (
        candidates[mid][i] === undefined ||
        candidates[mid][i] < searchWord[i]
      ) {
        low = mid + 1;
      } else {
        if (findFirst) {
          if (mid === 0 || candidates[mid - 1][i] !== candidates[mid][i]) {
            idx = mid;
            break;
          } else {
            high = mid - 1;
          }
        } else {
          if (
            mid === candidates.length - 1 ||
            candidates[mid][i] !== candidates[mid + 1][i]
          ) {
            idx = mid;
            break;
          } else {
            low = mid + 1;
          }
        }
      }
    }
    return idx;
  }


  class TrieNode {
    constructor(val, isWord = false) {
        this.val = val;
        this.children = new Map();
        this.isWord = isWord;
    }
}

class Trie {
    constructor(words) {
        this.trie = new TrieNode('');
        this.alphabet = [];
        for (let i = 0; i < 26; i++) {
            this.alphabet.push(String.fromCharCode(97 + i));
        }

        if (words) {
            words.forEach((val) => this.insert(val));
        }

    }

    insert(word) {
        const dfs = (i, node) => {
            if (i === word.length) {
                return;
            }

            let nextNode = node.children.get(word[i]);

            if (nextNode === undefined) {
                nextNode = new TrieNode(word[i], i === word.length - 1);
                node.children.set(word[i], nextNode);
            }

            if (!nextNode.isWord) {
                nextNode.isWord = i === word.length - 1;
            }


            dfs(i + 1, nextNode);
        }

        dfs(0, this.trie);
    }

    findByPrefix(prefix) {
        let prefixRoot = null;
        const dfs = (i, node) => {
            if (i === prefix.length) {
                prefixRoot = node;
                return;
            }

            let nextNode = node.children.get(prefix[i]);
            if (nextNode === undefined) {
                return;
            }

            dfs(i + 1, nextNode);
        }

        dfs(0, this.trie);
        return prefixRoot;
    }

    findAllWordsWithPrefix(prefix, limit = 3) {
        const prefixRoot = this.findByPrefix(prefix);
        if (prefixRoot === null) {
            return [];
        }

        const words = [];
        const dfs = (node, word = prefix) => {
            if  (words.length === limit) {
                return;
            }


            if (node.isWord) {
                words.push(word);
            }

            for (let i = 0; i < this.alphabet.length; i++) {
                const nextNode = node.children.get(this.alphabet[i]);
                const nextWord = word + this.alphabet[i];
                if (nextNode === undefined) {
                    continue;
                }

                dfs(nextNode, nextWord);
            }

        }

        dfs(prefixRoot);
        return words;
    }
}

const suggestedProducts = (products, searchWord) => {
    const trie = new Trie(products);

    let words = [];
    let word = '';
    for (let i = 0; i < searchWord.length; i++) {
        word += searchWord[i];
        words[i] = trie.findAllWordsWithPrefix(word);
    }

    return words;
};
